Contents = ["Alcohol", "Napkin", "Tissue", "Face Mask", "Shampoo and Soap", "Toothpaste and Toothbrush"];
Contents1Length = Contents.length;


function GetSearch(Value){
    RelatedSearch = [];
    OriginList = Value.split('');
    OriginLength = OriginList.length;
    console.log("List Before:", OriginList, "; Length:", OriginLength);
    SearchSplit = [];

    for (i = 0; i < OriginLength; i++) {
        SearchSplit.push(OriginList[i].toLowerCase());
    }

    // Checking if results are good
    console.log("Results:", SearchSplit);

    DisplayContents = Contents.slice();  // Create a copy to avoid mutating the original array
    let indicesToRemove = [];

    for (i = 0; i < Contents1Length; i++) {
        
        SearchCondition = true
        console.log("Checking", DisplayContents[i]);

        ContentChosen = DisplayContents[i];
        
        // Check if the content is valid before splitting
        if (ContentChosen) {
            ContentList = ContentChosen.split("");
            ContentLength = ContentList.length;
            ContentListFixed = [];

            for (j = 0; j < ContentLength; j++) {
                ContentListFixed.push(ContentList[j].toLowerCase());
            }

            CheckWordLength = null;

            if (ContentLength > OriginLength) {
                CheckWordLength = OriginLength;
                console.log("Using Origin length");
            } else {
                CheckWordLength = ContentLength;
                console.log("Using Content Length");
            }

            for (k = 0; k < CheckWordLength; k++) {
                if (SearchSplit[k] !== ContentListFixed[k]) {
                    console.log("Canceled search for", ContentChosen)
                    SearchCondition = false
                } else{
                    console.log("Letter", ContentListFixed[k],"confirmed")
                }
            }

            if (SearchCondition == true){
                console.log("Pushing content:", ContentChosen)
                RelatedSearch.push(ContentChosen)
            }
        }
    }

   

   return RelatedSearch
}


function ShowingResults(Val){
  if (Val.trim() !== ""){
    Results = GetSearch(Val)
    ResultsFixed = []
    console.log("Fixed Results:",ResultsFixed)

    document.getElementById("FoundResults").innerHTML = "<h2>Related Searches</h2>"

    for (i=0; i<Results.length; i++){
        ResultsFixed.push(Results[i].replaceAll(" ","_"))
    }


    if (ResultsFixed.length != 0){
        
        
       
        for (x=0;x<ResultsFixed.length; x++){
            document.getElementById("FoundResults").innerHTML  += document.getElementById(ResultsFixed[x]).innerHTML;
        }
    } else if (ResultsFixed.length == 0){
        console.error("Couldn't find results")
        document.getElementById("FoundResults").innerHTML += "We couldn't find anything that is related to your search :("
    }
  } else{
    console.error("Search bar must be filled")
  }
}
