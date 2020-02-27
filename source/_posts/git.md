---
title: git
copyright: true
date: 2020-02-13 12:49:44
description: Introduce how to work with git
tags:
	- git
categories:
	- linux
---

## Install Git and config Git

```
>> root:
sudo pacman -S git
```

### First-Time Git Setup

These variables can be stored in three different places:
<span id="inline-toc">1.</span> `/etc/gitconfig`
> Contains values applied to every user on the system and all their repositories.

<span id="inline-toc">2.</span> `~/.gitconfig` or `~/.config/git/config`
> Values specific personally to you, the user.

<span id="inline-toc">3.</span> `.git/config`
> File in the Git directory of whatever repository you're currently using.

{% note info %}
Each level overrides values in the previous level, so values in `.git/config` trump those in `/etc/gitconfig`
{% endnote %}

**View all of your settings and where they are coming from using** 
`$ git config --list --show-origin`

### Set your user name an email address

```
$ git config --global user.name "guangsizhongbin"
$ git config --global user.email guangsizhongbin@gmail.com
```

### Set your Editor

```
$ git config --global core.editor nvim
```

### Checking Your Settings

```
$ git config --list
```

### Getting Help

```
$ git help <verb>
$ git <verb> --help
$ man git-<verb>
```

## Git Basics

### Getting a Git Repository
<span id="inline-toc">1.</span> Existing Directory
<span id="inline-toc">2.</span> Clone

### Initializing a Repository in an Existing Directory

```
$ cd /home/user/my_project
$ git init
```

### Cloning an Existing Repository

Specify the new directory name as an additional argument.

```
$ git clone https://github.com/abc/abc  abc
```

## Recording Changes to the Repository

- Each file in your working directory can be in one of two states: `tracked` or `untracked`.

### Checking the status of Your Files.
```
$ git status

On branch master
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

Let's add a new file to your project, a simple `README` file.
```
$ echo 'My Project' > README
$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README

nothing added to commit but untracked files present (use "git add" to track)
```

### Tracking New Files

```
$ git add README

$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README
```

### Short Status
```
$ git status -s 

AM CONTRIBUTING.md
A  README
```

`??` : New files that aren't tracked a `??` next to them.
`A`  : New files that have been added to the staging area have an `A`.
`M`  : Modified files.


### Ignoring Files.
Create a file listing patterns to match them named `.gitignore`
```
# ignore all .a files
*.a

# but do track lib.a, even theough you're ignoring .a files above
!lib.a

# only ignore the TODO file in the current directory, not subdir /TODO
/TODO

# ignore all files in any directory named build
doc/*.txt

# ignore all .pdf files in the doc/ directory and any of its subdirectories.
doc/**/*.pdf
```

{% note info %}
- Blank lines or lines starting with `#` are ignored.
- Standard glob patterns work, and will be applied recursively throughout the entire working tree.
- You can start patterns with a forward slash(/) to  avoid recursivity.
- You can end pattern with a forward slash(/) to specify a directory.
- You can negate a pattern by starting it with an exclamation point(!)
{% endnote %}


### Viewing Your Staged and Unstaged Changes

`git diff`:
This command compares what is in your working directory with what is in your staging area.

{% note info %}
`git diff` by itself doesn't show all changes made since your last commit -- only changes that are still unstaged. If you've staged all of your changes, `git diff` will give you no output.
{% endnote %}


### Committing Your Changes

`# git commit -m "xxxxx"`

### Skipping the Staging Area

`-a` Adding the option to the `git commit` command makes Git automatically stage every file that is already tracked before doing the commit, letting you skip the `git add` part


### Removing Files

<span id="inline-toc">1.</span> Only Remving Files.

`git rm` it stages the file's removeal.

<span id="inline-toc">2.</span> Remove it from staging area.

use `--cached`
`$ git rm --cached README`

### Moving Files

`$ git mv fiel_from file_to`

### Viewing the Commit History

```
$ git log

commit bc3fa0a790302ac3b8a27dde69fd0f7806f4ae52 (HEAD -> master)
Author: guangsizhongbin <guangsizhongbin@gmail.com>
Date:   Thu Feb 13 15:02:37 2020 +0800

    my fist commit

```

`-p` or `--path`, which shows the difference(the patch output) introduced in each commit.
`--stat`, prints below each commit entry a list of modified files, how many files were changed, and how many lines in those files were added and removed. It also puts a summary of the information at the end.
`--pretty`, This option changes the log output to formats other than the default.

### Limiting Log Output
| Option            | Description                                                                  |
|-------------------|------------------------------------------------------------------------------|
| -<n>              | Show only the last n commits                                                 |
| --since, --after  | Limit the commits to those made after the specified date                     |
| --until, --before | Limit the commits to those made before the specified date.                   |
| --author          | Only show commits in which the author entry matches the specified string.    |
| --committer       | Only show commits in which the committer entry matches the specified string. |
| --grep            | Only show commits with a commit message containing the string                |
| -S                | Only show commits adding or removing code matching the string                |

### Undoing Things

`$ git commit --amend`

For example:
```
$ git commit -m "initial commit"
$ git add forgotten_file
$ git commit --amend
```
 
### Unstaging a Staged File

`git reset HEAD <file>`

### Unmodifying a Modified File

`git checkout -- <file>`
{% note info %}
this is a dangerous command. Any local changes you made to that files are gone -- Git just replaced that file with the most recently-committed version.
{% endnote %}

{% note info %}
Remember, anything that is `committed` in Git can almost always be recovered. Even commits that were on branches that were deleted or commits that were overwritten with an `--amend` commit can be recovered. However, anything you lose that was never committed is likely never to be seen again.
{% endnote %}

## Working with Remotes

### Showing Your Remotes
```
$ git remote -v
origin  https://aur.archlinux.org/yay.git (fetch)
origin  https://aur.archlinux.org/yay.git (push)
```

### Adding Remote Repositories
`git remote add <shortname> <url>`
`git fetch <shortname>`

For example:
```
$ git remote add git https://github.com/guangsizhongbin/nvim

$ git remote -v
git     https://github.com/guangsizhongbin/nvim (fetch)
git     https://github.com/guangsizhongbin/nvim (push)

$ git fetch git

```

### Fetching and Pulling from Your Remotes
`$ git fetch <remote>`

### Pushing to Your Remotes
`$ git push origin master`


### Inspecting a Remote
`$ git remote show <remote>`

```
warning: redirecting to https://github.com/guangsizhongbin/guangsizhongbin.github.io.git/
* remote origin
  Fetch URL: http://github.com/guangsizhongbin/guangsizhongbin.github.io.git
  Push  URL: http://github.com/guangsizhongbin/guangsizhongbin.github.io.git
  HEAD branch: master
  Remote branches:
    hexo   tracked
    master tracked
  Local branches configured for 'git pull':
    hexo   merges with remote hexo
    master merges with remote master
  Local refs configured for 'git push':
    hexo   pushes to hexo   (up to date)
    master pushes to master (local out of date)
```

### Renaming and Removing Remotes
<span id="inline-toc">1.</span> Renaming
```
$ git remote rename pb paul
$ git remote
origin
paul
```

<span id="inline-toc">2.</span> Removing
```
$ git remote remove paul
$ git remote
origin
```

## Tagging

### Listing Your Tags
```
$ git tag
v1.0
v2.0
```

```
$ git tag -l "v1.8.5"
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
v1.8.5.1
v1.8.5.2
v1.8.5.3
v1.8.5.4
v1.8.5.5
```

### Creating Tags

Git support two types of tag: `lightweight` and `annotated`.

<span id="inline-toc">1.</span> Annotated Tags
Specify `-a` when you run the `tag` command.

```
$ git tag -a v1.4 -m "my version 1.4"
```

<span id="inline-toc">2.</span> Lightweight Tags























