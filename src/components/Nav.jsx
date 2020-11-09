import React from 'react'


export default function Nav() {

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Tallercito PM's</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        </div>

    )
}