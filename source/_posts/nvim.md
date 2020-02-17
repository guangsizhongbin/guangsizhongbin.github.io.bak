---
title: nvim
copyright: true
date: 2020-02-13 19:00:11
description: Install nvim and how to use it.
tags:
	- nvim
categories:
	- nvim 
---

## Install 
`sudo pacman -S neovim`

## Basic mappings
|      map     |                  effect                 |               key              |
|:------------:|:---------------------------------------:|:------------------------------:|
|   mapleader  |                                         |               " "              |
|       Q      |                   quit                  |             :q<CR>             |
|     <C-q>    |                 quit all                |             :qa<CR>            |
|       R      |               source vimrc              |      :source $MYVIMRC<CR>      |
|       S      |                   save                  |             :w<CR>             |
|       ;      |                    :                    |                :               |
|  <LEADER>rc  |              open init.vim              | :e ~/.config/nvim/init.vim<CR> |
|       Y      | make Y to copy till the end of the line |               y$               |
| `vnoremap` Y |         Copy to system clipboard        |               "+y              |
|       <      |               Indentation               |               <<               |
|       >      |               Indentation               |               >>               |
| <LEADER><CR> |           no Highlight Search           |         :nohlsearch<CR>        |
|  <LEADER>dw  |         Adjacent duplicate words        |       /\(\<\w\+\>\)\_s*\1      |
|  <LEADER>sc  |      Spelling Check with <space>sc      |         :set spell!<CR>        |
|       `      |               change case               |                ~               |
|     <C-c>    |         center cursor on screen         |               zz               |
|      \s      |             find and replace            |       :%s//g<left><left>       |
|       r      |                 auto Gcc                |                                |

## Cursor Movement
| map |                  effect                 | key |
|:---:|:---------------------------------------:|:---:|
|  H  |       go to the start of the line       |  0  |
|  L  |        go to the end of the line        |  $  |
|  w  |   jump forwards to the start of a word  |     |
|  b  | jump backwards to the start of the word |     |
|  W  |                    5w                   |  5w |
|  B  |                    5b                   |  5b |
|  J  |                    5j                   |  5j |
|  K  |                    5k                   |  5k |

## Working with multiple files
| map                       | effect                               | key             |
| :-----------------------: | :----------------------------------: | :-------------: |
| :e file                   | edit a file in a new buffer          |                 |
| <LEADER> h/j/k/l          | move to h/j/k/l window               | <C-w> h/j/k/l   |
| sk/ sj/ sh/ sl            | split window                         | set  split      |
| <up><down><left><right>   | Resize splits with arrow keys        | res             |
| sp                        | Place the two screens up and down    | <C-w>t<C-w>K    |
| cz                        | Place the two screens side by side   | <C-w>t<C-w>H    |

## table
| map                       | effect                               | key             |
| :-----------------------: | :----------------------------------: | :-------------: |
| ta                        | Create a new tabe                    | :tabe           |
| th                        | move to the left tab                 | :-tabnext       |
| tl                        | move to the right tab                | :+tabnext       |


## Plugins
### coc
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| <space>y                  | CocList -A --normal	yank             |
| gd                        | coc-definition                       |
| gy                        | coc-type-definition                  |
| gi                        | coc-implementation                   |
| gr                        | coc-refrences                        |
| rn                        | coc-rename                           |
| tt                        | coccomand explorer                   |

### vim-table-mode
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| <LEADER>tm                | :TableModeToggle<CR>                 |

### Undotree
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| <LEADER>u                 | :UndotreeToggle                      |
| <buffer> k                | UndotreeNextState                    |
| <buffer> j                | UndotreePreviousState                |
| <buffer> K                | 5 UndotreeNextState                  |
| <buffer> J                | 5 UndotreeNextState                  |

### Vista
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| T                         | :Vista                               |

### goyo
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| <LEADER>gy                | :Goyo                                |


### Ranger
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| <leader>r                 | :Ranger                              |

### vim-easy-align
| map                       | effect                               |
| :-----------------------: | :----------------------------------: |
| ga                        | <Plug>(EasyAlign)                    |

### md_snippets
| map                       | effect                                                                 |
| :-----------------------: | :----------------------------------:                                   |
| ,f                        | <Esc>/<++><CR>:nohlsearch<CR>"_c4l                                     |
| ,w                        | <Esc>/ <++><CR>:nohlsearch<CR>"_c51<CR>                                |
| ,b                        | **** <++><Esc>F*hi                                                     |
| ,d                        | ~~~~ <++><Esc>F~hi                                                     |
| ,c                        | ```<Enter><+++><Enter>```<Enter><Enter><++><Esc>4kA                    |
| ,p                        | ![](<++>) <++><Esc>F[a                                                 |
| ,l                        | [](<++>) <++><Esc>F[a                                                  |
| ,1                        | #<Space><Enter><++><Esc>kA                                             |
| ,2                        | ##<Space><Enter><++><Esc>kA                                            |
| ,3                        | ###<Space><Enter><++><Esc>kA                                           |
| ,4                        | ####<Space><Enter><++><Esc>kA                                          |
| ,i                        | {% note info%}<Enter><++><Enter>{% endnote %}<Enter><Enter><++><Esc>KA |
| ,g                        | {% label success@ %}<Space><Space><++><Esc>F@a                         |
| ,y                        | {% label warning@ %}<Space><Space><++><Esc>F@a                         |
| ,n                        | <span id="inline-toc">.</span><Space><++><Esc>2F>a                     |
| ,jz                       | {% cq %}<Enter><Enter>{% endcq %}<enter><enter><++><Esc>3ka            |





