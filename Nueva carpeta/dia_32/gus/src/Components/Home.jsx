function Home() {
    // Los arrays set no son arrays reales
    let getName = localStorage.getItem("TaskName");
    let setName = [getName];
    let getDescription = localStorage.getItem("TaskDescription");
    let setDescription = [getDescription];

     if (getName == null || getDescription == null){
        getName = [];
        getDescription = [];
    }


    let word = "";
    let nombreList = [];
    let i = 0;
    let long = 0;

    for (i = 0; i < getName.length; i++) {
        if (getName[i] == ",") {
            if (word != "") {
                nombreList.push(word);
            }
            word = "";
            long = nombreList.length;
        }
        else {
            if (getName[i] != "") {
                word = word + getName[i];
            }
        }
    }

    word = "";
    let desList = [];
    i = 0;
    long = 0;

    for (i = 0; i < getDescription.length; i++) {
        if (getDescription[i] == ",") {
            if (word != "") {
                desList.push(word);
            }
            word = "";
            long = desList.length;
        }
        else {
            if (getDescription[i] != "") {
                word = word + getDescription[i];
            }
        }
    }




    return (
        <div>
            <h1>Home</h1>
            <div>
                {nombreList.map((n, index) => (<div key={index}>
                    <span>TaskId: {index} | </span>
                    <span>name: {n} | </span>
                    <span>description: {desList[index]} | </span>
                    </div>))}
            </div>


        </div>
    );
}

export default Home