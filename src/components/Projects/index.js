import React from 'react';
import './style.css';

function Project () {
    return (
        <section id="work" class="page-section">
                    <h2>Work</h2>
                    <div class="flex-container">
                        <a class="flex-item work-one" href="https://pure-island-77704.herokuapp.com/">
                            <div class="work-text">
                                <h3>Foodie Central at Home</h3>
                                <span>A Recipe Share</span>
                            </div>
                        </a>
                        <a class="flex-item work-two" href="https://phoenix-ceri.github.io/FoodieCentral/">
                            <div class="work-text">
                                <h3>Foodie Central</h3>
                                <span>Locate Local Eateries</span>
                            </div>
                        </a>
                        <a class="flex-item work-three" href="https://kflinnn.github.io/Quiz-Yo-Self/">
                            <div class="work-text">
                                <h3>Quiz Yo'Self</h3>
                                <span>A Coding Quiz</span>
                            </div>
                        </a>
                        <a class="flex-item work-four" href="https://kflinnn.github.io/Schedule-It/">
                            <div class="work-text">
                                <h3>Schedule It!</h3>
                                <span>Daily Planner</span>
                            </div>
                        </a>
                        <a class="flex-item work-five" href="https://kflinnn.github.io/Generate-Your-Password/">
                            <div class="work-text">
                                <h3>Generate Your Password</h3>
                                <span>A Password Generator</span>
                            </div>
                        </a>
                    </div>
                </section>
    );
}

export default Project;