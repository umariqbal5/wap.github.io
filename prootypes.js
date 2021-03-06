window.onload = function(){
    function logger(text) {
        document.getElementById("log").innerHTML += text+"<br>";
        console.log(text);
    }


    //1.
    String.prototype.filter = function (w) {
        const words= this.split(" ");
        const result = words.filter(word => word !== w);
        let res='';
         for(let i of result){
            res+=i+'\n';
        }
        return res;
    };


    //2.
    // swap function helper
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    Array.prototype.bubbleSort = function(){
        let array = this;
        for(let i = 0; i < array.length; i++) {
            for(let j = 1; j < array.length; j++) {
                if(array[j - 1] > array[j]) {
                    swap(array, j - 1, j);
                }
            }
        }
        return array;
    }


    //3.
    function Person(n){
        this.name = n;
        this.teach = function(subject){
            logger(this.name + ' is now teaching '+subject);
        }
    }

    const Teacher = new Person('Umar');
    Teacher.teach('Maths');


    const Person2 = {
        name : '',
        teach: function (subject){
            logger(this.name + ' is now teaching '+subject);
        }
    }
    const Teacher2 = Object.create(Person2);
    Teacher2.name='Umar'
    Teacher2.teach('CS');






    //Output
    logger('Example 1: Strong filter');
    logger("This house is not nice!".filter('not'));

    logger('Example 2: Array BubbleSort');
    logger([6,4,0, 3,-2,1].bubbleSort());


};