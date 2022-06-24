import React from 'react'
import "./Cards.css"
import '../styles/main.css';
function Cards({ players }) {
    return (
        <div>
            <div class="container">
                {players.map((player) =>
                (
                    <div class="child-flex-item" id="child-flex-1">
                        <div class="child-child-flex-item" >
                            <img className="photoresize"src={player.photo}/>
                        </div>
                        <div class="child-child-flex-item" id="child-child-flex-name">{player.name}</div>
                        <div class="child-child-flex-item" id="child-child-flex-button">
                            <a href="https://www.premierleague.com/players/2522/Cristiano-Ronaldo/stats" target="_blank"
                                rel="noopener noreferrer">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Button
                                </button>
                            </a>
                        </div>
                    </div>

                )
        )}
            </div>
        </div>

    );
}

export default Cards
