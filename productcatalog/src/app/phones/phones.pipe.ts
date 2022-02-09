import { Pipe, PipeTransform } from "@angular/core";
import { Phones } from "./phones.interfaces";

@Pipe({
    name: 'phoneFilter'
})

export class PhonesPipe implements PipeTransform {
    transform(phones: Phones[], searchPhones: String): Phones[] {
        if(!phones || ! searchPhones) {
            return phones;
        }
        return phones.filter(phones => phones.name.toLowerCase().indexOf(searchPhones.toLowerCase()) !== -1);
        
    }

}