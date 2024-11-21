<template>
  <header>
    <div class="container">
      <h1>Teste Técnico - BIGCORE</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/botoes">Botões</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
  nav {
    width: 200px;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      height: 100%;
      gap: 10px;
    }
    li {
      display: flex;
      height: 100%;
      align-items: center;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  header {
    background: #26A69A;
    color: #fff;
    height: 60px;
    margin-bottom: 20px;
    width: 100%;
    .container {
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
    h1 {
      color: #fff;
      display: inline;
      margin: 0;
      font-size: clamp(1.25rem, 0.9535rem + 1.3953vw, 2rem)
    }
  
  }
</style>
