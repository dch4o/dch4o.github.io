FROM node:18

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update \
    && apt-get -y -q --no-install-recommends install \
        apt-utils \
        bash-completion \
        curl \
        git \
        locales \
        nano \
    && rm -rf /var/lib/apt/lists/*

# Set locale
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
    && locale-gen

USER node
ENV SHELL "/bin/bash"
