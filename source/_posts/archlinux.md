---
title: Archlinux
copyright: true
date: 2020-02-12 18:26:53
tags:
	- Archlinux
categories:
	- Archlinux
image: http://cdn.jsdelivr.net/gh/guangsizhongbin/picture/dssarchlinux.png
---

## Pre-installation
### USB flash installation media
> dd bs=4M if=path/to/archlinux.iso of=/dev/sdx status=progress oflag=sync


<!--more-->

## Installing
### Connect to the internet

<span id="inline-toc">1.</span> wifi-menu
<span id="inline-toc">2.</span> select the wifi
<span id="inline-toc">3.</span> check the wifi  >> ping baidu.com

### Update the system clock

```
# timedatectl set-ntp true
```

### Partition the disks
<span id="inline-toc">1.</span> fdisk -l
<span id="inline-toc">2.</span> Root: mount on /mnt
<span id="inline-toc">3.</span> Boot: mount on /mnt/boot
<span id="inline-toc">4.</span>Format the partitions
>		Boot: mkfs.fat -F32 /dev/sdxY
>		Root: mkfs.ext4 /dev/sdxY

### Select the fastest mirrors
> vim : /etc/pacman.d/mirrorlist

### Install essential packages
> pacstrap /mnt base linux linux-firmware vim 

### Configure the system
### Fstab
> genfstab -L /mnt >> /mnt/etc/fstab

### Chroot
> arch-chroot /mnt

### Time zone
<span id="inline-toc">1.</span>Set the time zone:
> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

<span id="inline-toc">2.</span>Run hwclock 
> hwclock - -systohc

### Localization
<span id="inline-toc">1.</span>Uncomment `en_US.UTF-8 UTF-8` in `/etc/locale.gen`. and generate it with: `locale-gen`.

<span id="inline-toc">2.</span>Create the `locale.conf` file, and set the `LANG` variable accordingly:

```
/etc/locale.conf
LANG="en_US.UTF-8"
```

### Network configuration
<span id="inline-toc">1.</span> Create the `hostname` file
```
/etc/hostname
myhostname
```

<span id="inline-toc">2.</span> Add matching entries to hosts
```
/etc/hosts
127.0.0.1  localhost
::1        localhost
127.0.1.1  myhostname.localdomain  myhostname
```

### Root password
>  passwd

### Boot loader
> pacman -S os-prober ntfs-3g

**EFI/GTP** :
```
> pacman -S grub efibootmgr
> grub-install --target=x86_64-efi --efi-directory=/boot  --bootloader-id=grub
> grub-mkconfig -o /boot/grub/grub.cfg


check:
> vim /boot/grub/grub.cfg
```

### Install `Intel-ucode`
> pacman -S intel-ucode

### Pre-installation before Reboot(support for wifi-menu)
> pacman -S iw wpa_supplicant dialog netctl

### Reboot
```
> umount /mnt/boot
> umount /mnt
> reboot
```


## Install KDE Plasma
### Install Xorg
> sudo pacman -S xorg

### Install KDE applications
> sudo pacman -S plasma konsole

### Install networkmanager
> sudo pacman -S networkmanager

### Install sddm
> sudo pacman -S sddm sddm-kcm
> sudo systemctl enable sddm

### Add a user
> useradd -m -G wheel -s /bin/bash users
> passwd users

### Add a user to Wheel group

```
>> sudo pacman -S sudo

>> visudo
umcomment `#` #%wheel ALL=(ALL)
```


## On KDE Plasma
### Add Archlinuxcn

```
>> /etc/pacman.conf

[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.con/archlinuxcn/$arch

>> bash:
sudo pacman -S archlinuxcn-keyring
```

### base_softwares
sudo pacman -S git node npm python3-pip

### nvim
sudo pacman -S neovim

sudo pacman -S python-pip
sudo pacman -S pynvim

sudo pacman -S nodejs
sudo pacman -S npm
sudo npm install -g neovim
sudo pacman -S nerd-fonts-complete

### fzf
sudo pacman -S fzf

### music
sudo pacman -S netease-cloud-music

### office
sudo pacman -S wps-office ttf-wps-fonts

### zsh & oh-my-zsh
sudo pacman -S zsh
sh -C "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

### google-chrome
sudo pacman -S google-chrome


### input method

```
sudo pacman -S fcitx-googlepinyin
sudo pacman -S fcitx-im
sudo pacman -S fcitx-configtool
sudo pacman -S fcitx-skin-material

>> ~/.xprofile
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```


### yay

git clone https://aur.archlinux.org/yay.git
cd yay
sudo pacman -S base-devel
makepkg -si


### proxy
sudo pacman -S trojan
sudo pacman -S proxychains-ng
> /etc/proxychains.conf

### you-get
sudo pacman -S you-get

### ranger
sudo pacman -S ranger

### video
sudo pacman -S vlc

### screenshot
yay deepin-screenshot

### screen-recoder
sudo pacman -S deepin-screen-recorder

### pdf
sudo pacman -S okular

### dictionary
sudo pacman -S goldendict
sudo pacman -S mplayer

### fonts
sudo pacman -S wqy-zenhei wqy-bitmapfont wqy-microhei ttf-wps-fonts adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts

### tools
sudo pacman -S neofetch
sudo pacman -S net-tools

### download
sudo pip3 install you-get

### beautify
sudo pacman -S gnome-tweak-tool

### picbed
yay -S picgo-appimage

#### jsDeliver
http://cdn.jsdelivr.net/gh/guangsizhongbin/picture

#### xclip
sudo pacmans -S xclip



### baiduyun
sudo pacman -S baidunnetdisk-bin



## pacman help

