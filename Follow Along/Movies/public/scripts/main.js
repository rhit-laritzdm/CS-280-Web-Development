var rhit = rhit || {};
rhit.FB_COLLECTION_MOVIEQUOTE = "MovieQuotes";
rhit.FB_KEY_QUOTE = "quote";
rhit.FB_KEY_MOVIE = "movie";
rhit.FB_KEY_LAST_TOUCHED = "lastTouched";
rhit.fbMovieQuotesManager = null;
rhit.fbSingleQuoteManager = null;

rhit.FbSingleQuoteManager = class {
    constructor(movieQuoteId) {
        this._documentSnapshot = {};
        this._unsubscribe = null;
        this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_MOVIEQUOTE).doc(movieQuoteId);
    }
    beginListening(changeListener) {
        this._unsubscribe = this._ref.onSnapshot((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this._documentSnapshot = doc;
            changeListener();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            //window.location.href = "/";
        }
    });
    }
    stopListening() {
        this._unsubscribe();
    }
    update(quote, movie) {
        this._ref.update({
            [rhit.FB_KEY_QUOTE]: quote,
            [rhit.FB_KEY_MOVIE]: movie,
            [rhit.FB_KEY_LAST_TOUCHED]: firebase.firestore.Timestamp.now(),
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    
    
    delete() {
        return this._ref.delete();
    }
    
    
    get quote() {
        return this._documentSnapshot.get(rhit.FB_KEY_QUOTE);
    }
    
    
    get movie() {
        return this._documentSnapshot.get(rhit.FB_KEY_MOVIE);
    }
}
    
    