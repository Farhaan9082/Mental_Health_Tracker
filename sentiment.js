document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
        const text = document.getElementById('text').value;
        callback(text)
    });
});

var callback = (text) => {
    // The minimum prediction confidence.
    const threshold = 0.9;
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    toxicity.load(threshold).then(model => {
        const sentence = text;
        model.classify(sentence).then(predictions => {
            for (let i = 0; i < 8; i++) {
                const prediction = predictions[i];
                try {
                    if (prediction["results"][0]["match"] == true) {
                        console.log("NEGATIVE: " + prediction["label"] + ': ' + prediction["results"][0]["probabilities"][0] + ', ' + prediction["results"][0]["probabilities"][1])
                    } 
                    if (prediction["results"][0]["match"] == false) {
                        console.log("POSITIVE: " + prediction["label"] + ': ' + prediction["results"][0]["probabilities"][0] + ', ' + prediction["results"][0]["probabilities"][1])
                    }
                } catch (error) {}
            }
        });
    });
}
