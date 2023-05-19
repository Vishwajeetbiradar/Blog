var allInput=document.querySelectorAll("input")
var allselectTags=document.querySelectorAll("select")
var userGen;
function storeTheValue()
{
    var firstName=allInput[0].value
    var surName=allInput[1].value
    var emailorMobile=allInput[2].value
    var pass=allInput[3].value
    var date=allselectTags[0].value
    var month=allselectTags[1].value
    var year=allselectTags[2].value
    localStorage.setItem("Fname",firstName)
    localStorage.setItem("Sname",surName)
    localStorage.setItem("E&M",emailorMobile)
    localStorage.setItem("pass",pass)
    localStorage.setItem("dd",date)
    localStorage.setItem("mm",month)
    localStorage.setItem("yy",year)
    sessionStorage.setItem("E&M",emailorMobile)
    sessionStorage.setItem("pass",pass)

}
function gender(gen)
{
    userGen=gen
}