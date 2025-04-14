# 🌵 Github Blog

``` text
📰 Last updated on April 14, 2025.
```

## Welcome!

This repository is for my github pages blog, which is being hosted on https://dch4o.github.io/


## Local build and preview

I mainly work on my blog with [Visual Studio Code](https://code.visualstudio.com/) and my home desktop computer, which has Windows 11 installed, hence you may need [official WSL2 installation guide](https://learn.microsoft.com/en-us/windows/wsl/install) to follow this document.

### Preparation
Easiest way for install Docker engine is to install Docker Desktop. If you want to install Docker Desktop, please follow the official installation guide:  
https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers

But if you don't want to install Docker in your desktop machine, open the WSL2 Ubuntu distribution and follow manual installation:  
https://docs.docker.com/engine/install  

And make sure to finish post-installation jobs:  
https://docs.docker.com/engine/install/linux-postinstall

### Build and run

Simply,
```bash
$ npm install
$ npm run dev # -- --host (if you need)
```

See [package.json](package.json#L5) for overridden script commands for details.


## Acknowledgements

My blog is built on top of [Astrowind](https://github.com/onwidget/astrowind/)!  
Thank you [onWidget](https://onwidget.com/) for sharing such versatile base frameworks for Astro starters like me.

## License

This repository is licensed under MIT license — See [LICENSE](LICENSE) for details.
