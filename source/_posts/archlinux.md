---
title: how to install archlinux
copyright: true
date: 2020-02-12 18:26:53
tags:
	- install
categories:
	- linux
urlname: archlinux

image: https://cdn.jsdelivr.net/gh/guangsizhongbin/picture/dssarchlinux.png

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
> systemctl enable NetworkManager

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
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch

>> bash:
sudo pacman -S archlinuxcn-keyring
```

<span id="inline-toc">1.</span>  base_softwares
sudo pacman -S git npm python-pip

<span id="inline-toc">2.</span>  nvim
sudo pacman -S neovim
sudo pacman -S cags

sudo pip3 install pynvim

sudo pacman -S nerd-fonts-complete

<span id="inline-toc">3.</span>  fzf
sudo pacman -S fzf

<span id="inline-toc">4.</span> music
sudo pacman -S netease-cloud-music

<span id="inline-toc">5.</span> terminal
1. zsh && oh-my-zsh
 
sudo pacman -S zsh
sh -C "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"


<span id="inline-toc">6.</span> chrome
sudo pacman -S google-chrome


## shutdown fater
<span id="inline-toc">7.</span> input menthod

```
sudo pacman -S fcitx-lilydjwg-git fcitx-sogoupinyin 
sudo pacman -S kcm-fcitx

>> ~/.xprofile
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```



<span id="inline-toc">8.</span> yay

git clone https://aur.archlinux.org/yay.git
cd yay
sudo pacman -S base-devel
makepkg -si


<span id="inline-toc">9.</span> proxy
sudo pacman -S trojan
sudo pacman -S proxychains-ng
> /etc/proxychains.conf

<span id="inline-toc">10.</span> video
sudo pacman -S mpv

<span id="inline-toc">11.</span>  screen
sudo pacman -S deepin-screen-recorder deepin-screenshot

<span id="inline-toc">12.</span> pdf
sudo pacman -S okular

<span id="inline-toc">13.</span> dictionary
sudo pacman -S goldendict

<span id="inline-toc">14.</span>  fonts
sudo pacman -S wqy-zenhei wqy-bitmapfont wqy-microhei ttf-wps-fonts adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts

<span id="inline-toc">15.</span> download
sudo pip3 install you-get
sudo pacman -S baidunetdisk-bin

<span id="inline-toc">16.</span> picbed
1. yay -S picgo-appimage

2. http://cdn.jsdelivr.net/gh/guangsizhongbin/picture

<span id="inline-toc">17.</span> tool
sudo pacmans -S xclip

<span id="inline-toc">18.</span> QQ && wechat
```
>> QQ 
sudo pacman -S deepin.com.qq.office 
or
sudo pacman -S deepin.com.qq.im


sudo pacman -S gnome-settings-daemon
`/usr/lib/gsd-xsettings`
[设置自动启动](<https://wiki.archlinux.org/index.php/KDE_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%90%AF%E5%8A%A8>) 

>> wechat

>> /etc/pacman.conf
uncommet [multilib]
yay -S deepin-wine-wechat
```


## beautify
sudo pacman -S variety
yay mcmojave

## GPU
sudo pacman -S nvida bbswitch optimus-manager-qt-kde






