import React from 'react'

export default function Login() {
  return (
    <main>
        <div>
            <p>Não tem uma conta?</p>
            <button>Sing Up</button>
        </div>

        <div>
            <h1>Bem vindo ao Login</h1>
            <img src="" alt="" />
            <p>Insira as suas informações de login</p>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="password">Senha:</label>
                <input type="text" />
            </div>

            <div>
                <button>Login</button>
            </div>
        </div>
    </main>
  )
}
