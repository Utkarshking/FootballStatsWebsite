import React from 'react'
import "./Cards.css"
import '../styles/main.css';
function Cards() {
    return (
        <div>
            <div class="container">
                <div class="child-flex-item" id="child-flex-1">
                    <div class="child-child-flex-item" id="child-child-flex-photo-cristiano"></div>
                    <div class="child-child-flex-item" id="child-child-flex-name">Cristiano Ronaldo</div>
                    <div class="child-child-flex-item" id="child-child-flex-button">
                        <a href="https://www.premierleague.com/players/2522/Cristiano-Ronaldo/stats" target="_blank"
                            rel="noopener noreferrer">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Button
                            </button>
                        </a>
                    </div>
                </div>
                <div class="child-flex-item" id="child-flex-2">
                    <div class="child-child-flex-item" id="child-child-flex-photo-messi"></div>
                    <div class="child-child-flex-item" id="child-child-flex-name">Lionel Messi</div>
                    <div class="child-child-flex-item" id="child-child-flex-button">
                        <a href="https://www.ligue1.com/player/stats?id=lionel-andres-messi-cuccittini" target="_blank"
                            rel="noopener noreferrer">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Button
                            </button>
                        </a>
                    </div>
                </div>
                <div class="child-flex-item" id="child-flex-3">
                    <div class="child-child-flex-item" id="child-child-flex-photo-neymar"></div>
                    <div class="child-child-flex-item" id="child-child-flex-name">Neymar Jr.</div>
                    <div class="child-child-flex-item" id="child-child-flex-button">
                        <a href="https://www.ligue1.com/player/stats?id=neymar-da-silva-santos-junior" target="_blank"
                            rel="noopener noreferrer">
                             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Button
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
