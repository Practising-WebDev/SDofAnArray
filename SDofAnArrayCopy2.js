function StandardDeviation(array) {
    // SUM
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let avg = sum / array.length;

    // Standard deviation (SD)
    let NominatorSum = 0;
    for (let k = 0; k < array.length; k++) {
        NominatorSum = NominatorSum + (array[k] - avg) * (array[k] - avg);
    }
    let std = Math.sqrt(NominatorSum / (array.length - 1));
    return std;
}

function renderbox() {
    let length = 0;
    length = parseInt(document.getElementById("arraylength").value);
    innerhtml = ``;
    for (let t = 0; t < length; t++) {
        innerhtml = innerhtml + `<input class="inputstyle" id="`+(t+1)+`" type="number" placeholder="Enter your Number"></input><br/>`
    }

    if(button2.value.length==0){
        document.getElementById("answerbox").innerHTML = 'Please fill all the fields';
    } 
    else {
        document.getElementById("left").innerHTML =
`<form>
      <div id="inputandboxspace">
        <div>
            <div id="fordigitstyle">Enter Your Numbers</div><br>
            ` + innerhtml + `
            <input type="reset" value="Reset" id="clear1" onclick="clearAnswer()">
        </div>

        <!-- Answer --> 
        <div id="answerbox">
            Get Your Answer Here....
        </div>
      </div>
</form>`+
        `<div>
        <input id="button1" type=submit onclick="runClick()" value="Calculate" />
        <input id="refreshbutton" type=submit onclick="refreshpage()" value="Change Number of digits" />
</div>`;
    }
}

function runClick() {
    let arr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(document.getElementById(`#${i+1}`).value);
    }

    let Stdeviation = StandardDeviation(arr);
    document.getElementById("answerbox").innerHTML = Stdeviation;
}

function clearAnswer() {
    document.getElementById("answerbox").innerHTML = 'Get Your Answer Here....';
}

function refreshpage() {
    location.reload();
}