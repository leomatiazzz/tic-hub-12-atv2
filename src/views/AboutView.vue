<template>
  <div class="about">
    <div class="content">
      <h1>Projeto feito por <span class="name">Léo Matias</span></h1>
      <p class="subtitle">Desenvolvedor Full-stack</p>

      <div class="social-links">
        <a
          href="https://github.com/leomatiazzz"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link github"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/leomatias/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link linkedin"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.084 0-1.739.731-2.032 1.437-.104.252-.131.605-.131.959v5.409h-3.553v-9.996h3.553v1.373c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.848zM5.337 8.855c-1.144 0-2.088-.929-2.088-2.076 0-1.147.944-2.076 2.088-2.076 1.143 0 2.088.929 2.088 2.076 0 1.147-.945 2.076-2.088 2.076zm1.782 11.597H3.555v-9.996h3.564v9.996zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
            />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/leomvtias"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link instagram"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.459.686-2.04 1.267-.581.581-1.004 1.261-1.267 2.04-.266.788-.468 1.658-.527 2.936C.013 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.264.779.687 1.459 1.268 2.04.581.581 1.261 1.004 2.04 1.267.788.265 1.658.467 2.936.527C8.333 23.987 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.936-.528.79-.264 1.46-.687 2.04-1.268.581-.581 1.004-1.261 1.267-2.04.265-.788.467-1.658.527-2.936.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.528-2.936-.264-.779-.687-1.459-1.268-2.04-.581-.581-1.261-1.004-2.04-1.267-.788-.266-1.658-.468-2.936-.527C15.667.013 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.355 1.056.41 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.056.355-2.227.41-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.355-1.056-.41-2.227-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.056-.355 2.227-.41 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  padding: 40px 20px;
}

.content {
  text-align: center;
}

.about h1 {
  font-size: 3rem;
  color: #e2e8f0;
  margin-bottom: 8px;
  font-weight: 700;
}

.name {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.3rem;
  color: #a0aec0;
  margin-bottom: 40px;
  font-weight: 300;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
}

.social-link svg {
  width: 28px;
  height: 28px;
}

.social-link.github {
  background: linear-gradient(135deg, #333 0%, #555 100%);
}

.social-link.github:hover {
  background: linear-gradient(135deg, #444 0%, #666 100%);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(51, 51, 51, 0.4);
}

.social-link.linkedin {
  background: linear-gradient(135deg, #0077b5 0%, #0088cc 100%);
}

.social-link.linkedin:hover {
  background: linear-gradient(135deg, #0088cc 0%, #0099dd 100%);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 119, 181, 0.4);
}

.social-link.instagram {
  background: linear-gradient(135deg, #e4405f 0%, #feda75 50%, #fd1d1d 100%);
}

.social-link.instagram:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(228, 64, 95, 0.4);
}

@media (max-width: 768px) {
  .about h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .social-links {
    gap: 20px;
  }

  .social-link {
    width: 45px;
    height: 45px;
  }

  .social-link svg {
    width: 24px;
    height: 24px;
  }
}
</style>
