// Employee Attendance Processing System
// ------------------------------------
// - Calculates working time for ONE day
// - Handles errors safely with try / catch / finally
// - Never mutates original input
// - Shows summary in console

// Helper: Parse "HH:MM" (24-hour) into total minutes from midnight
function parseTimeToMinutes(timeStr) {
  if (timeStr == null) {
    throw new Error("Time value is missing");
  }

  if (typeof timeStr !== "string") {
    throw new Error("Time must be a string in HH:MM format");
  }

  const trimmed = timeStr.trim();
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(trimmed);

  if (!match) {
    throw new Error(`Invalid time format: "${timeStr}". Expected HH:MM in 24-hour format`);
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  return hours * 60 + minutes;
}

// Main function: processes ONE employee attendance record
function processAttendance(record) {
  // Do NOT change original input
  const safeRecord = { ...record };

  // Default summary structure
  const summary = {
    employeeId: safeRecord.employeeId ?? null,
    date: safeRecord.date ?? null,
    status: "error", // will update later
    totalWorkingMinutes: 0,
    overtimeMinutes: 0,
    note: "",
    errorMessage: null,
  };

  try {
    // 1) Check for missing check-in / check-out
    if (!safeRecord.checkIn || !safeRecord.checkOut) {
      summary.status = "incomplete";
      summary.note = "Check-in or check-out time is missing. Working time set to 0.";
      return summary; // still goes through finally
    }

    // 2) Convert check-in / check-out to minutes
    const checkInMinutes = parseTimeToMinutes(safeRecord.checkIn);
    const checkOutMinutes = parseTimeToMinutes(safeRecord.checkOut);

    // 3) Calculate break duration
    let breakMinutes = 0;

    if (safeRecord.breakDetails) {
      const br = safeRecord.breakDetails;

      // Case A: start and end are provided
      if (br.start && br.end) {
        const breakStart = parseTimeToMinutes(br.start);
        const breakEnd = parseTimeToMinutes(br.end);
        breakMinutes = breakEnd - breakStart;

        if (breakMinutes < 0) {
          throw new Error("Break end time is before break start time");
        }
      }
      // Case B: start given but NO end → use default 30 minutes
      else if (br.start && !br.end) {
        breakMinutes = 30;
      }
      // Case C: durationMinutes field
      else if (br.durationMinutes != null) {
        if (typeof br.durationMinutes !== "number" || br.durationMinutes < 0) {
          throw new Error("Invalid break duration in minutes");
        }
        breakMinutes = br.durationMinutes;
      }
      // else: no valid break info → treat as 0
    }

    // 4) Total working time = (checkOut - checkIn - break)
    const total = (checkOutMinutes - checkInMinutes) - breakMinutes;

    // 5) If total is negative → invalid
    if (total < 0) {
      summary.status = "invalid";
      summary.totalWorkingMinutes = 0;
      summary.overtimeMinutes = 0;
      summary.note = "Total working time became negative. Please check time inputs.";
      return summary;
    }

    // 6) Normal complete case
    summary.totalWorkingMinutes = total;

    // 7) Overtime calculation (if approved AND > 8 hours)
    const eightHoursInMinutes = 8 * 60;
    if (safeRecord.overtimeApproved === true && total > eightHoursInMinutes) {
      summary.overtimeMinutes = total - eightHoursInMinutes;
    }

    summary.status = "complete";
    summary.note = "Attendance calculated successfully.";

  } catch (err) {
    // Any parsing / logic error comes here
    summary.status = "error";
    summary.totalWorkingMinutes = 0;
    summary.overtimeMinutes = 0;
    summary.note = "Error occurred during attendance processing.";
    summary.errorMessage = err instanceof Error ? err.message : String(err);

  } finally {
    // This will always run
    console.log(
      `Attendance processed successfully for employee ${summary.employeeId} on ${summary.date}`
    );
  }

  return summary;
}

// ---------------------------------------------------------------------------
// Sample Data for 5 Employees
// ---------------------------------------------------------------------------

const attendanceData = [
  // 1) Perfect complete day with overtime (more than 8 hours) and valid break
  {
    employeeId: "E001",
    date: "2025-12-10",
    checkIn: "09:00",
    checkOut: "18:30", // 9.5 hours
    breakDetails: {
      start: "13:00",
      end: "13:30", // 30 minutes break
    },
    overtimeApproved: true,
  },

  // 2) Complete day, less than 8 hours, with default 30 min break (end missing)
  {
    employeeId: "E002",
    date: "2025-12-10",
    checkIn: "10:00",
    checkOut: "17:00", // 7 hours total
    breakDetails: {
      start: "14:00", // end missing → default 30 minutes
    },
    overtimeApproved: true,
  },

  // 3) Incomplete day (missing check-out)
  {
    employeeId: "E003",
    date: "2025-12-10",
    checkIn: "09:15",
    checkOut: null, // missing
    breakDetails: {
      start: "13:00",
      end: "13:20",
    },
    overtimeApproved: false,
  },

  // 4) Invalid day (check-out before check-in, causing negative working time)
  {
    employeeId: "E004",
    date: "2025-12-10",
    checkIn: "17:00",
    checkOut: "09:00", // earlier than check-in
    breakDetails: {
      durationMinutes: 30,
    },
    overtimeApproved: false,
  },

  // 5) Error case: wrong time format ("9am" instead of "09:00")
  {
    employeeId: "E005",
    date: "2025-12-10",
    checkIn: "9am", // invalid format
    checkOut: "18:00",
    breakDetails: {
      start: "13:00",
      end: "13:30",
    },
    overtimeApproved: true,
  },
];

// ---------------------------------------------------------------------------
// Run processing for all 5 employees and print results
// ---------------------------------------------------------------------------

const results = attendanceData.map(processAttendance);

console.log("\n===== Final Attendance Summary =====");
console.log(JSON.stringify(results, null, 2));
