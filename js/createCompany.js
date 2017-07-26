import {Company} from './company';

let anuRagerz = new Company();
anuRagerz.hire("Anu", "Ratz", "Veera");
document.querySelector('.module').innerHTML = anuRagerz.doWork();
