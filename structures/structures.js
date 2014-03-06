// Author: Parvesh Kumar Gahanolia 
// Email: <parvesh@vlabs.ac.in>

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

    instruction1: 'Bank of Gujrat has decided to computerize all its records.\n' +
        'They hired a software programmer, Ravi.\n' +
        'He suggested that five pieces of data had to be maintained in every account.\n\n' +
        'They are :\n' +
        '   1)Account type, either checking or savings\n' +
        '   2)Account holder name\n' +
        '   3)Branch in which the account is based\n' +
        '   4)A unique account number\n' +
        '   5)The current balance in the account\n\n' +
        'Ravi decides that using different variables to represent all this data would be messy and inefficient.\n' +
        'He decides that it would be better to represent the account\'s variables with the help of a structure.\n\n' +
        'Help Ravi write an account structure with the following variables:\n' +
        '   char type:(max size 10)\n' +
        '   char holder:(max size 30)\n' +
        '   char branch:(max size 20)\n' +
        '   char no:(account number,length 10)\n' +
        '   unsigned int bal (stores current balance):\n\n' +
        'Example of an employee structure:\n' +
        '   struct database {\n' +  
        '   unsigned int id_number;\n' +  
        '   unsigned int age;\n' +  
        '   unsigned int salary;\n' +
        '   };\n' +
        'Now define an Account structure below:\n',

    instruction2: 'Let us say we are opening an account for Suresh We will simply say:\n\n' +
        'struct account Suresh;\n\n' +
        'We can also use a type definition. This allows us to create account as a type of variable' +
        'similar to int or char. If we do that we can create his account as follows:\n\n' +
        'typedef struct account account;\n' +
        'account Suresh;\n\n' +
        'We can also create an array of accounts as follows:\n\n' +
        'account bank[10];\n\n' +
        'Create an account variable named ram and one named shyam. Also set balance to be 100 for ram' +
        'and shyam as two times account balance of ram. Assume that account type is created.\n\n' +
        '//Previous sample code:\n' +
        'struct account{\n' +
        '   char type[11];\n' +
        '   char holder[31];\n' +
        '   char branch[21];\n' +
        '   char no[11];\n' +
        '   unsigned int bal;\n' +
        '}\n' +
        'typedef struct account account;\n' +
        '//Or\n' +
        'struct account{\n' +
        '   char type[11];\n' +
        '   char holder[31];\n' +
        '   char branch[21];\n' +
        '   char no[11];\n' +
        '   unsigned int bal;\n' +
        '};\n',

    instruction3: 'Write a function to fill up an account. It takes the account variables as input and returns an account structure.\n' +
        'Now we have to fill up Suresh\'s account. Insert code to fill up his account as follows.\n\n' +
        'Account Type = Savings (Only Savings(smallcase) and Current(smallcase) allowed)\n' +
        'Account Name = Suresh\n' +
        'Account Branch = M.G Road, Bangalore\n' +
        'Account Number = 1000000000 (Check if length = 10 characters)\n' +
        'Account Balance = 10000\n',

    instruction4: 'Let us now write a code to find the details of the person with maximum balance in their account for the following main function..\n\n' +
        '//Previous code\n' +
        'struct account{\n' +
        '   char type[11];\n' +
        '   char holder[31];\n' +
        '   char branch[21];\n' +
        '   char no[11];\n' +
        '   unsigned int bal;\n' +
        '}\n' +
        'typedef struct account account;\n\n' +
        '//Assume initAcc is defined and following is the prototype\n' +
        'account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance);\n\n' +
        'void main(){\n' +
        '   account bank[4];\n' +
        '   bank[0]=initAcc(\"Ram\",\"Savings\",\",1000000000,300);\n' +
        '   bank[1]=initAcc(\"Shyam\",\"Savings\",\",1000000001,700);\n' +
        '   bank[2]=initAcc(\"Pradeep\",\"Current\",\",1000000002,600);\n' +
        '   bank[3]=initAcc(\"Suresh\",\"Savings\",\",1000000004,800);\n' +
        '   account max=findmax(bank);\n' +
        '}\n',

    solutionHint1: 'struct account{\n\n\n\n};',
    solutionHint2: '',
    solutionHint3: 'account initAcc(char* name, char* type, char* branch, char* number, unsigned int balance)\n{\n\n}',
    solutionHint4: 'account findMaxBal(account src[], int size){\n}',

    solution1: 'struct account{\n' +
        '   char type[10];\n' +
        '   char holder[30];\n' +
        '   char branch[20];\n' +
        '   char no[10];\n' +
        '   unsigned int bal;\n' +
        '};\n',

    solution2: 'account ram;\n' +
        'account shyam;\n' +
        'ram.bal=100;\n' +
        'shyam.bal=2*ram.bal;\n',

    solution3: 'account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance){\n' +
        'int isErr=0;\n' +
        'account newAc;\n' +
        'strcpy(newAc.holder,name);\n' +
        'strcpy(newAc.branch,branch);\n' +
        'if (strcmp(type,\"current\")==0 || strcmp(type,\"savings\")==0);\n' +
        'strcpy(newAc.type,type);\n' +
        'else isErr=1;\n' +
        'if (strlen(number)==10)\n' +
        'strcpy(newAc.no,number);\n' +
        'else isErr=1;\n' +
        'newAc.bal=balance;\n' +
        'if (!isErr)\n' +
        'return (newAc);\n' +
        'return NULL;\n' +
        '}\n',

    solution4: 'account findMaxBal(account src[], int size){\n' +
        'int i=0;\n' +
        'int maxBalIndex=0;\n' +
        'for (;i<size;i++){\n' +
        'if (src[i].bal>src[maxBalIndex].bal)\n' +
        'maxBalIndex=i;\n' +
        '}\n' +
        'printf (\"maxBalIndex is %d\", maxBalIndex);\n' +
        'return src[maxBalIndex];\n' +
        '}\n',

    suggestion1: '\"Please Try Again\"',
    suggestion2: '',

    addClickEvent: function (id, method) {
        var element = document.getElementById(id);
        element.addEventListener('click', method, false);
    },

    activateEvents: function () {
        this.addClickEvent('nextBtnId1', function() { view.nextBtnStep1() });
        this.addClickEvent('yesBtnId1', function() { view.yesButtonStep1() });
        this.addClickEvent('noBtn', function() { view.noButton() });
    },
 
    setString: function (id, value) {
        document.getElementById(id).value = value;
    },

    eraseString: function (id) {
        document.getElementById(id).value = '';
    },

    setInnerHtml: function (id, innerHTML) {
        document.getElementById(id).innerHTML = innerHTML;
    },

    setNewId: function (oldId, newId) {
        document.getElementById(oldId).id = newId;
    },

    toShowButton: function (id1, id2) {
        document.getElementById(id1).style.display = 'block';
        document.getElementById(id2).style.display = 'block';    
    },

    toHideButton: function (id1, id2) {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'none';
    },

    copyValue: function (id1, id2) {
        var value1 = document.getElementById(id1).value;
        document.getElementById(id2).value = value1;
    },

    nextBtnStep1: function () {
        this.setString('solutionArea', this.solution1);
        this.toShowButton('yesBtnId1', 'noBtn');
        this.copyValue('solutionHintArea', 'viewUserCode');
    },

    nextBtnStep2: function () {
        this.setString('solutionArea', this.solution2);
        this.toShowButton('yesBtnId1', 'noBtn');
        this.setNewId('yesBtnId1', 'yesBtnId2');
        this.addClickEvent('yesBtnId2', function() { view.yesButtonStep2() });
        this.copyValue('solutionHintArea', 'viewUserCode');  
    },

    nextBtnStep3: function () {
        this.setString('solutionArea', this.solution3);
        this.toShowButton('yesBtnId2', 'noBtn');
        this.setNewId('yesBtnId2', 'yesBtnId3');
        this.addClickEvent('yesBtnId3', function() { view.yesButtonStep3() });
        this.copyValue('solutionHintArea', 'viewUserCode'); 
    },

    nextBtnStep4: function () {
        this.setString('solutionArea', this.solution4);
        this.toShowButton('yesBtnId3', 'noBtn');
        this.setNewId('yesBtnId3', 'yesBtnId4');
        this.addClickEvent('yesBtnId4', function() { view.yesButtonStep4() });
        this.copyValue('solutionHintArea', 'viewUserCode');
    },

    yesButtonStep1: function () {
        this.setString('instructionArea', this.instruction2);
        this.setInnerHtml('stepId', this.stepString2);
        this.setInnerHtml('guideLineId',  this.guidelineString2);
        this.eraseString('solutionArea');
        this.eraseString('solutionHintArea');
        this.eraseString('viewUserCode');
        this.setNewId('nextBtnId1', 'nextBtnId2');
        this.toHideButton('yesBtnId1', 'noBtn');
        this.addClickEvent('nextBtnId2', function() { view.nextBtnStep2() }); 
    },

    yesButtonStep2: function () {
        this.setString('instructionArea', this.instruction3);
        this.setInnerHtml('stepId', this.stepString3);
        this.setInnerHtml('guideLineId',  this.guidelineString3);
        this.setString('solutionHintArea', view.solutionHint3);
        this.setNewId('nextBtnId2', 'nextBtnId3');
        this.toHideButton('yesBtnId2', 'noBtn');
        this.eraseString('viewUserCode');
        this.addClickEvent('nextBtnId3', function() { view.nextBtnStep3() });     
    },

    yesButtonStep3: function () {
        this.setString('instructionArea', this.instruction4);
        this.setInnerHtml('stepId', this.stepString4);
        this.setInnerHtml('guideLineId',  this.guidelineString4);
        this.setString('solutionHintArea', view.solutionHint4);
        this.setNewId('nextBtnId3', 'nextBtnId4');
        this.toHideButton('yesBtnId3', 'noBtn');
        this.eraseString('viewUserCode');
        this.addClickEvent('nextBtnId4', function() { view.nextBtnStep4() });   
    },

    yesButtonStep4: function () {
        alert('Code running is Over !');
        location.reload(true);
    },

    noButton: function () {
        this.setString('viewUserCode', this.suggestion1);
        this.setString('solutionArea', this.suggestion2);
    },

    init: function () {
        this.activateEvents();
    }
}

window.onload = function () {
    view.init();
    view.setString('instructionArea', view.instruction1);
    view.setString('solutionHintArea', view.solutionHint1);
    view.setString('viewUserCode', '');
    view.setString('solutionArea', '');
}