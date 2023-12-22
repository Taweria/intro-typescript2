(function () {
    var _a;
    (_a = document.getElementById('guess-form')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", compareUserGuess);
    function compareUserGuess(event) {
        event.preventDefault();
        var secretNumber = generateSecretNumber();
        var userNumberInput = document.getElementById('guess');
        var userNumber = userNumberInput.value;
        if (secretNumber == parseInt(userNumber)) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }
    function generateSecretNumber() {
        var secretNumber = getRandomArbitrary(1, 22);
        return secretNumber;
    }
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
