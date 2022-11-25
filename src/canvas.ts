"use strict";

interface Suitcard {
    value?: string,
    type: string,
    origin: string,
    analysis: string,
    refute: string
}

interface SuitHand{
    title: string,
    content: string
}

enum Kindsuit {
    king = "king",
    spades = "spaders",
    hearts = "hearts",
    clubs = "clubs",
    diamonds = "diamonds"
}

class Cards(Json:{any}, hand: HTMLElement) {
    this.Json = Json;
    this.hand = hand;

    this.coverJson = function() {
        let kinds = [...Object.keys(Json)];
        let values = [...Object.keys(kinds)];

        kinds.forEach((kind: string,  _) =>{
            if (kind !== "default"){
                values.forEach((value: string, _) => {
                    let data = Json[kind][value];
                    data.value = value;
                    let suit = {title: value, value: kind}
                    this.addCards(data, this.hand, suit)
                })
        }
        })
    }

    this.switchSuit = function(card:Suitcard) {
        
    }

    this.addCards = function(data:Suitcard, hand:HTMLBodyElement,suit: SuitHand) {
        hand.innerHTML = `
        <div class="card ${suit.title}">
            <header>
                <ul class="suit">

                    <li class="value">${data.value}</li>
                    <li>${suit.content}</li>

                </ul>
            </header>
            <footer>
                <ul class="suit">

                    <li class="value">${data.value}</li>
                    <li>${suit.content}</li>

                </ul>
            </footer>
            <section class="content">
                <ul>
                    <li class="origin">${data.origin}</li>
                    <li class="analysis">${data.analysis}
                    </li>
                    <li class="refute">${data.refute}</li>
                </ul>
            </section>
        </div>
        `
    }

    this.fitContent = function() {
        let content = document.querySelectorAll(".card .content");
        content.forEach((e, _) => {
            let origin = e.find(".origin");
            let refute = e.find(".refute");
            if (origin.text().length > 24) {
                origin.css("font-size", 8);
            }
            if (refute.text().length > 24) {
                refute.css("font-size", 7);
            }
        })
    }
}

module.exports = Cards