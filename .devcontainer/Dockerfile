FROM node:18

# 기본 패키지 설치 (선택)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Astro CLI 설치
RUN npm install -g create-astro

# 기본 사용자 설정
USER node
