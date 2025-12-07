### ✅ 1–2 Line Summaries for Every Topic

### Getting Started

- Getting Ready for Class – Learn the tools, prerequisites, and setup needed before starting with GitHub.
- Getting Started – Introduction to GitHub accounts, repos, and essential navigation.
- GitHub Flow – A simple workflow using branches, commits, pull requests, and merges.
- Project 1: Caption This – Practice basic GitHub workflow by contributing captions using branches and PRs.
# Check Git installation
git --version

# Configure user identity
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Verify Git configuration
git config --list


### Branching with Git

- Local Git Configs – Configure your username, email, and preferences for Git on your machine.
- Working Locally – Create branches, make commits, and manage files on your local system.
- Collaborating on Code – Work with teammates through forks, branches, issues, and pull requests.
- Editing on GitHub – Make file changes directly through the GitHub web interface.
- Merging Pull Requests – Combine feature branches into main after review and approval.
- Local History – View commit history, previous versions, and file changes locally.
- Streamline Workflow with Aliases – Create custom Git shortcuts to speed up common commands.
- Project 2: Merge Conflicts – Hands-on practice dealing with file conflicts caused by overlapping edits.

### Merge Conflicts

- Defining a Merge Conflict – Happens when Git cannot decide between two competing changes.
- Resolving Merge Conflicts – Manually edit conflicting sections, then commit to complete the merge.

# Initialize a new repository
git init

# Add a remote origin
git remote add origin git@github.com:owner/repo.git
# or
git remote add origin https://github.com/owner/repo.git

# Create or rename main branch
git checkout -b main
# or
git branch -M main

# Initial commit
git add .
git commit -m "chore: initial commit"

# Push main branch and set upstream
git push -u origin main


## Project 3: GitHub Games

- Workflow Review – Revisiting GitHub Flow and applying it to a collaborative game project.
- Protected Branches & CODEOWNERS – Restrict changes and require approvals for important branches.
- Git Bisect – Find the exact commit that introduced a bug by binary search.
- Reverting Commits – Undo a bad commit by creating a reverse commit.
- Helpful Git Commands – Frequently used commands like status, log, diff, and branch.
- Viewing Local Changes – Inspect modifications in your working directory and staging area.
- Tags & Releases – Mark project versions and create downloadable release packages.
- Workflow Discussion – Evaluate and improve team collaboration processes.

### Project 4: Local Repository

- Create a Local Repo – Start a Git project using git init on your own machine.
- Fixing Commit Mistakes – Adjust recent commits using amend or reset.
- Forgot to Branch? – Recover by creating a new branch from recent commits.
- Rewriting History with Git Reset – Move HEAD and modify commit history.
- Cherry Picking – Apply a specific commit from any branch onto another branch.
- Merge Strategies – Choose different algorithms like merge, rebase, squash for combining branches.

# Create a new feature branch
git checkout -b feature/ISSUE-123-short-desc

# Commit work
git add .
git commit -m "feat: short description (ISSUE-123)"

# Sync with main (recommended: rebase)
git fetch origin
git rebase origin/main

# Resolve conflicts, then:
git add <file>
git rebase --continue

# Push feature branch
git push --force-with-lease origin feature/ISSUE-123-short-desc

# Alternative workflow: merge instead of rebase
git merge origin/main
git push -u origin feature/ISSUE-123-short-desc


### Advanced Topics

- Personal Access Tokens – Secure authentication tokens used instead of passwords.
- GitHub Actions – Automate workflows like testing, building, and deployment.
- Automate Releases – Automatically generate releases based on tags or workflow triggers.
.gitignore File – Exclude files and folders from Git tracking.
- Commit Signature Verification – Verify authorship using GPG or SSH signing keys.
- Git Stash – Temporarily save uncommitted changes without creating a commit.

# Stash current changes
git stash
git stash pop

# Create .gitignore rule
echo "node_modules/" >> .gitignore
