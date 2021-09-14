from django.shortcuts import render
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import string
from json import dumps

# Create your views here.
def index(request):
    return render(request, 'MHApp/index.html', {})

def analyze(request):
    text = request.GET.get('text')
    lowertext = text.lower()
    cleanedtext = lowertext.translate(str.maketrans('','',string.punctuation))
    score = SentimentIntensityAnalyzer().polarity_scores(cleanedtext)
    score_ = {"negative": round(score['neg'], 2), "neutral": round(score['neu'], 2), "positive": round(score['pos'], 2)}
    score = dumps(score_)

    return render(request, 'MHApp/index.html', {'score': score})
