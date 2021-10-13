function get_publications_1(){
    document.getElementById('Person_name').innerHTML="Viswanath K.";
    document.getElementById('Publications_7').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_1').style.display="block";
}
function get_publications_2(){
    document.getElementById('Person_name').innerHTML="Suresh Purini";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_7').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_2').style.display="block";
}
function get_publications_3(){
    document.getElementById('Person_name').innerHTML="Kesav V. Nori";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_7').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_3').style.display="block";
}
function get_publications_4(){
    document.getElementById('Person_name').innerHTML="Raghu Reddy Y.";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_7').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_4').style.display="block";
}
function get_publications_5(){
    document.getElementById('Person_name').innerHTML="Vasudeva Varma";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_7').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_5').style.display="block";
}
function get_publications_6(){
    document.getElementById('Person_name').innerHTML="Ramesh Loganathan";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_7').style.display="none";

    document.getElementById('Publications_6').style.display="block";
}
function get_publications_7(){
    document.getElementById('Person_name').innerHTML="Venkatesh Choppella";
    document.getElementById('Publications_1').style.display="none";
    document.getElementById('Publications_2').style.display="none";
    document.getElementById('Publications_3').style.display="none";
    document.getElementById('Publications_4').style.display="none";
    document.getElementById('Publications_5').style.display="none";
    document.getElementById('Publications_6').style.display="none";
    document.getElementById('Publications_7').style.display="block";
    
}
function getAllPub(){
    person = "https://dblp.org/pid/39/7116.xml";
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_1").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/44/7025.xml";
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_7").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/136/4557.xml";
    
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_6").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/03/4045.xml";
    
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_5").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/r/RaghuReddy.xml";
    
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_4").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/08/11295.xml";
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_3").append('<li>' + content + '</li>');
            });
        }
});
    person = "https://dblp.org/pid/81/4357.xml";
    
    $.ajax({
        type: "GET",
        url: person,
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },
        success: function (response) {
            $("#ProfileList").children().remove();
            $(response).find("r").each(function () {
                var authors_ = "";
                console.log("Inside ajax: "+person);
                $(this).find("author").each(function () {
                    authors_ = authors_ + $(this).text()+" ,";
                });
                authors_ = authors_.slice(0, -1);
                var content = authors_ +" : " + "<a href='"+ $(this).find('ee').eq(0).text() + "'>"+$(this).find('title').text()+"</a>"  +" " +$(this).find('journal').text() +" "+ $(this).find('booktitle').text() +" "+ $(this).find('pages').text() +" "+  $(this).find('year').text();
                $("#Publications_2").append('<li>' + content + '</li>');
            });
        }
});
}