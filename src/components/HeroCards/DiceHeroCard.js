import React from 'react';

function DiceHeroCard() {
  return (
    <section className="bg-transparent p-8   rounded-lg flex flex-col lg:flex-row lg:gap-0 gap-8 items-center border-b-4 border-accent lg:border-none lg:h-[100vh] ">
      <div className="ml-12 lg:ml-0 flex justify-center lg:justify-start ">
        <img
          className=" w-[80%] "
          src="https://raw.githubusercontent.com/rivSpades/Gambloors/master/src/img/dice_landing.png"
          alt="diceimage"
        />
      </div>
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className=" main-herocard-left-top-text mx-auto lg:mx-0 ">
            Dice
          </h1>

          <h1 className=" main-herocard-left-top-text mx-auto lg:mx-0">
            The Most Played Game
          </h1>
        </div>
        <p className=" main-herocard-left-bottom-text mx-auto lg:mx-0 text-center lg:text-left ">
          Play bitcoin and ethereum gamblers favourite.
        </p>
        <a className="mx-auto lg:mx-0 " href="#dice">
          <button
            type="button"
            className="nav-btn-register main-herocard-left-bottom-btn  w-80 h-14 sm:w-auto "
          >
            <p className="text-center mx-auto uppercase">Start Winning</p>
          </button>
        </a>
      </div>
    </section>
  );
}

export default DiceHeroCard;
