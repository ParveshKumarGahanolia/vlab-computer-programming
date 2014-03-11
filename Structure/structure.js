//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

window.model = {

}

window.view = {
    stepString1: 'Step 1: Define a structure',
    stepString2: 'Step 2: Declare a structure',
    stepString3: 'Step 3: Function to fill a structure',
    stepString4: 'Step 4: Use structures to handle data',
    guidelineString1: 'Definition of Account',
    guidelineString2: 'Declare a structure below',
    guidelineString3: 'Function to fill an account',
    guidelineString4: 'Code to find person with maximum balance',
    instruction1: 'Bank of Gujrat has decided to computerize all its records.</br>' +
        'They hired a software programmer, Ravi.</br>' +
        'He suggested that five pieces of data had to be maintained in every account.</br></br>' +
        'They are :</br>' + 
        '&emsp;1)Account type, either checking or savings</br>' +
        '&emsp;2)Account holder name</br>' +
        '&emsp;3)Branch in which the account is based</br>' +
        '&emsp;4)A unique account number</br>' +
        '&emsp;5)The current balance in the account</br></br>' +
        'Ravi decides that using different variables to represent all this data would be messy and inefficient.</br>' +
        'He decides that it would be better to represent the account\'s variables with the help of a structure.</br></br>' +
        'Help Ravi write an account structure with the following variables:</br>' +
        '&emsp;char type:(max size 10)</br>' +
        '&emsp;char holder:(max size 30)</br>' +
        '&emsp;char branch:(max size 20)</br>' +
        '&emsp;char no:(account number,length 10)</br>' +
        '&emsp;unsigned int bal (stores current balance):</br></br>' +
        'Example of an employee structure:</br>' +
        '&emsp;struct database {</br>' +  
        '&emsp;unsigned int id_number;</br>' +  
        '&emsp;unsigned int age;</br>' +  
        '&emsp;unsigned int salary;</br>' +
        '&emsp;};</br>' +
        'Now define an Account structure below:</br>',
    instruction2: 'Let us say we are opening an account for Suresh We will simply say:</br></br>' +
        'struct account Suresh;</br></br>' +
        'We can also use a type definition. This allows us to create account as a type of variable' +
        'similar to int or char. If we do that we can create his account as follows:</br></br>' +
        'typedef struct account account;</br>' +
        'account Suresh;</br></br>' +
        'We can also create an array of accounts as follows:</br></br>' +
        'account bank[10];</br></br>' +
        'Create an account variable named ram and one named shyam. Also set balance to be 100 for ram' +
        'and shyam as two times account balance of ram. Assume that account type is created.</br></br>' +
        '//Previous sample code:</br>' +
        'struct account{</br>' +
        '&emsp;char type[11];</br>' +
        '&emsp;char holder[31];</br>' +
        '&emsp;char branch[21];</br>' +
        '&emsp;char no[11];</br>' +
        '&emsp;unsigned int bal;</br>' +
        '}</br>' +
        'typedef struct account account;</br>' +
        '//Or</br>' +
        'struct account{</br>' +
        '&emsp;char type[11];</br>' +
        '&emsp;char holder[31];</br>' +
        '&emsp;char branch[21];</br>' +
        '&emsp;char no[11];</br>' +
        '&emsp;unsigned int bal;</br>' +
        '};</br>',
    instruction3: 'Write a function to fill up an account. It takes the account variables as input and returns an account structure.</br>' +
        'Now we have to fill up Suresh\'s account. Insert code to fill up his account as follows.</br></br>' +
        'Account Type = Savings (Only Savings(smallcase) and Current(smallcase) allowed)</br>' +
        'Account Name = Suresh</br>' +
        'Account Branch = M.G Road, Bangalore</br>' +
        'Account Number = 1000000000 (Check if length = 10 characters)</br>' +
        'Account Balance = 10000</br>',
    instruction4: 'Let us now write a code to find the details of the person with maximum balance in their account for the following main function..</br></br>' +
        '//Previous code</br>' +
        'struct account{</br>' +
        '&emsp;char type[11];</br>' +
        '&emsp;char holder[31];</br>' +
        '&emsp;char branch[21];</br>' +
        '&emsp;char no[11];</br>' +
        '&emsp;unsigned int bal;</br>' +
        '}</br>' +
        'typedef struct account account;</br></br>' +
        '//Assume initAcc is defined and following is the prototype</br>' +
        'account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance);</br></br>' +
        'void main(){</br>' +
        '&emsp;account bank[4];</br>' +
        '&emsp;bank[0]=initAcc(\"Ram\",\"Savings\",\",1000000000,300);</br>' +
        '&emsp;bank[1]=initAcc(\"Shyam\",\"Savings\",\",1000000001,700);</br>' +
        '&emsp;bank[2]=initAcc(\"Pradeep\",\"Current\",\",1000000002,600);</br>' +
        '&emsp;bank[3]=initAcc(\"Suresh\",\"Savings\",\",1000000004,800);</br>' +
        '&emsp;account max=findmax(bank);</br>' +
        '}</br>',
    solutionHint1: 'struct account{\n\n\n\n};',
    solutionHint2: '',
    solutionHint3: 'account initAcc(char* name, char* type, char* branch, char* number, unsigned int balance)\n{\n\n}',
    solutionHint4: 'account findMaxBal(account src[], int size){\n}',
    solution1: 'struct account{</br>' +
        '&emsp;char type[10];</br>' +
        '&emsp;char holder[30];</br>' +
        '&emsp;char branch[20];</br>' +
        '&emsp;char no[10];</br>' +
        '&emsp;unsigned int bal;</br>' +
        '};</br>',
    solution2: 'account ram;</br>' +
        'account shyam;</br>' +
        'ram.bal=100;</br>' +
        'shyam.bal=2*ram.bal;</br>',
    solution3: 'account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance){</br>' +
        'int isErr=0;</br>' +
        'account newAc;</br>' +
        'strcpy(newAc.holder,name);</br>' +
        'strcpy(newAc.branch,branch);</br>' +
        'if (strcmp(type,\"current\")==0 || strcmp(type,\"savings\")==0);</br>' +
        'strcpy(newAc.type,type);</br>' +
        'else isErr=1;</br>' +
        'if (strlen(number)==10)</br>' +
        'strcpy(newAc.no,number);</br>' +
        'else isErr=1;</br>' +
        'newAc.bal=balance;</br>' +
        'if (!isErr)</br>' +
        'return (newAc);</br>' +
        'return NULL;</br>' +
        '}</br>',
    solution4: 'account findMaxBal(account src[], int size){</br>' +
        'int i=0;</br>' +
        'int maxBalIndex=0;</br>' +
        'for (;i<size;i++){</br>' +
        'if (src[i].bal>src[maxBalIndex].bal)</br>' +
        'maxBalIndex=i;</br>' +
        '}</br>' +
        'printf (\"maxBalIndex is %d\", maxBalIndex);</br>' +
        'return src[maxBalIndex];</br>' +
        '}</br>',
    suggestion1: '\"Please Try Again\"',
    suggestion2: '',
    // addClickEvent: add EventListener to other methods.
    addClickEvent: function (id, method) {
        var element = document.getElementById(id);
        element.addEventListener('click', method, false);
    },
    // activateEvents: calls addClickEvent method to add EventListener to other methods.
    activateEvents: function () {
        this.addClickEvent('submitBtnId1', function() { view.showDefinitionOfAccount() });
        this.addClickEvent('yesBtnId1', function() { view.goOnDeclareStructure() });
        this.addClickEvent('noBtn', function() { view.removeErrorOfCode() });
    },
    // removeClickEvent: remove EventListener to other methods.
    removeClickEvent: function (id, method) {
        var element = document.getElementById(id);
        element.removeEventListener('click', method, false);
    },
    // enableElement: makes element enable.
    enableElement: function (id) {
        document.getElementById(id).disabled = false;
    },
    // disableElement: makes element disable.
    disableElement: function (id) {
        document.getElementById(id).disabled = true;
    },
    // setString: set given string to a element.
    setString: function (id, value) {
        document.getElementById(id).value = value;
    },
    // eraseString: erase given string to a element.
    eraseString: function (id) {
        document.getElementById(id).value = '';
    },
    // setInnerHtml: set innerText to a element.
    setInnerHtml: function (id, innerHTML) {
        document.getElementById(id).innerHTML = innerHTML;
    },
    // setNewId: set new id to a element.
    setNewId: function (oldId, newId) {
        document.getElementById(oldId).id = newId;
    },
    // showButton: set button display style as block.
    showButton: function (id1, id2) {
        document.getElementById(id1).style.display = 'block';
        document.getElementById(id2).style.display = 'block';    
    },
    // showButton: set button display style as none.
    hideButton: function (id1, id2) {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'none';
    },
    // copyValue: copy value from one text area and past this value to another text area.
    copyValue: function (id1, id2) {
        var valueOfTextArea = document.getElementById(id1).value;
        document.getElementById(id2).value = valueOfTextArea;
    },
    // 
    showDefinitionOfAccount: function () {
        //alert('submitBtnId1');
        this.setInnerHtml('solutionArea', this.solution1);
        this.copyValue('solutionHintArea', 'viewUserCode');
        this.showButton('yesBtnId1', 'noBtn');
    },
    showDeclareStructure: function () {
        //alert('submitBtnId2');
        this.setInnerHtml('solutionArea', this.solution2);
        this.copyValue('solutionHintArea', 'viewUserCode');
        this.showButton('yesBtnId1', 'noBtn');
        this.setNewId('yesBtnId1', 'yesBtnId2');
        this.addClickEvent('yesBtnId2', function() { view.goToFillAccount() });
    },
    showFillAccount: function () {
        //alert('submitBtnId3');
        this.setInnerHtml('solutionArea', this.solution3);
        this.copyValue('solutionHintArea', 'viewUserCode');
        this.showButton('yesBtnId2', 'noBtn');
        this.setNewId('yesBtnId2', 'yesBtnId3');
        this.addClickEvent('yesBtnId3', function() { view.goToHandleData() });
    },
    showMaximumBalance: function () {
        //alert('submitBtnId4');
        this.setInnerHtml('solutionArea', this.solution4);
        this.copyValue('solutionHintArea', 'viewUserCode');
        this.showButton('yesBtnId3', 'noBtn');
        this.setNewId('yesBtnId3', 'yesBtnId4');
        this.addClickEvent('yesBtnId4', function() { view.goToEndOfCode() }); 
    },
    goOnDeclareStructure: function () {
        //alert('yesBtnId1');
        this.setInnerHtml('instructionArea', this.instruction2);
        this.setInnerHtml('stepId', this.stepString2);
        this.setInnerHtml('guideLineId',  this.guidelineString2);
        this.setInnerHtml('solutionArea', '');
        this.eraseString('solutionHintArea');
        this.eraseString('viewUserCode');
        this.setNewId('submitBtnId1', 'submitBtnId2');
        this.hideButton('yesBtnId1', 'noBtn');
        this.addClickEvent('submitBtnId2', function() { view.showDeclareStructure() });
    },
    goToFillAccount: function () {
        //alert('yesBtnId2');
        this.setInnerHtml('instructionArea', this.instruction3);
        this.setInnerHtml('stepId', this.stepString3);
        this.setInnerHtml('guideLineId',  this.guidelineString3);
        this.setInnerHtml('solutionArea', '');
        this.setString('solutionHintArea', this.solutionHint3);
        this.eraseString('viewUserCode');
        this.setNewId('submitBtnId2', 'submitBtnId3');
        this.hideButton('yesBtnId2', 'noBtn');
        this.addClickEvent('submitBtnId3', function() { view.showFillAccount() });
    },
    goToHandleData: function () {
        //alert('yesBtnId3');
        this.setInnerHtml('instructionArea', this.instruction4);
        this.setInnerHtml('stepId', this.stepString4);
        this.setInnerHtml('guideLineId',  this.guidelineString4);
        this.setInnerHtml('solutionArea', '');
        this.setString('solutionHintArea', this.solutionHint4);
        this.setNewId('submitBtnId3', 'submitBtnId4');
        this.hideButton('yesBtnId3', 'noBtn');
        this.eraseString('viewUserCode');
        this.addClickEvent('submitBtnId4', function() { view.showMaximumBalance() });   
    },
    goToEndOfCode: function () {
        //alert('yesBtnId4');
        alert('Code running is Over !');
        this.setInitialId();
        this.setInitialString();
    },
    removeErrorOfCode: function () {
        this.setString('viewUserCode', this.suggestion1);
        this.setInnerHtml('solutionArea', this.suggestion2);
        this.hideButton('yesBtnId1', 'noBtn');
    },
    setInitialId: function () {
        this.setNewId('submitBtnId4', 'submitBtnId1');
        this.setNewId('yesBtnId4', 'yesBtnId1');
        this.addClickEvent('submitBtnId1', function() { view.showDefinitionOfAccount() });
    },
    setInitialString: function () {
        this.setInnerHtml('instructionArea', this.instruction1);
        this.setString('solutionHintArea', this.solutionHint1);
        this.setInnerHtml('stepId', this.stepString1);
        this.setInnerHtml('guideLineId',  this.guidelineString1);
        this.setString('viewUserCode', '');
        this.setInnerHtml('solutionArea', '');
    },
    init: function () {
        this.activateEvents();
        this.setInitialString();
    }
}

window.onload = function () {
    view.init();
}