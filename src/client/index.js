import logo from './pics/jh.png';
import tests from './pics/tests.png';
import usatoday from './pics/usatoday.png';
import abcnews from './pics/abcnews.png';
import mashable from './pics/mashable.png';
import { checkURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
var mylogo = document.getElementById('jhlogo');
mylogo.src = logo;
var testimg= document.getElementById('testimg');
testimg.src= tests
var nlogo1 = document.getElementById('nlogo1');
nlogo1.src = usatoday;
var nlogo2 = document.getElementById('nlogo2');
nlogo2.src = abcnews;
var nlogo3 = document.getElementById('nlogo3');
nlogo3.src = mashable;
export {
    checkURL,
    handleSubmit,

}