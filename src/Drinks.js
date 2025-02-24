import React, { useState, useRef, useEffect } from "react";
import cocktails from "./cocktails";

function Drinks() {
    const sortedCocktails = [...cocktails].sort((a, b) => a.popularity - b.popularity);
    const [selectedCocktail, setSelectedCocktail] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setSelectedCocktail(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleClick = (index) => {
        if (selectedCocktail === index) {
            setSelectedCocktail(null);
        } else {
            setSelectedCocktail(index);
        }
    };

    return (
        <div className={`container dark ${selectedCocktail !== null ? 'has-selected' : ''}`}>
            <h1>Drinks</h1>
            <div className="cocktail-list">
                {sortedCocktails.map((cocktail, index) => (
                    <div
                        key={index}
                        className={`cocktail-card`}
                        onClick={() => handleClick(index)}
                    >
                        <h2>{cocktail.name}</h2>
                        <div className="ingredients">
                            {cocktail.ingredients.map((ingredient, i) => (
                                <div key={i} className="ingredient">
                                    <div>{ingredient.name}</div><div>{ingredient.quantity}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedCocktail !== null && (
                <div
                    ref={cardRef}
                    className="cocktail-card selected-overlay"
                >
                    <button
                        className="close-button"
                        onClick={() => setSelectedCocktail(null)}
                    >
                        ×
                    </button>
                    <h2>{sortedCocktails[selectedCocktail].name}</h2>
                    <div className="ingredients">
                        {sortedCocktails[selectedCocktail].ingredients.map((ingredient, i) => (
                            <div key={i} className="ingredient">
                                <div>{ingredient.name}</div><div>{ingredient.quantity}</div>
                            </div>
                        ))}
                    </div>
                    <h4 className="steps-header">Steps:</h4>
                    <div className="steps">
                        {sortedCocktails[selectedCocktail].steps.map((step, i) => (
                            <div key={i} className="step">{i + 1}. {step}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Drinks;