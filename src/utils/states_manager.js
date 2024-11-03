import { LocalizationManager } from "./localization_manager"

function class_by_relation(rel){
    if (rel==null || rel.state==0){
        return "new"
    }
    const states = {
        1: "learning",
        2: "problematic",
        3: "learned",
        4: "known"
    }

    const class_ = states[rel.state]

    if (class_!=undefined) return class_
    return ""
}

function state_description_by_relation(rel){
    if (rel==null || rel.state==0){
        return LocalizationManager.get_string("cat_new")
    }

    const descriptions = {
        1: LocalizationManager.get_string("cat_learn"),
        2: LocalizationManager.get_string("cat_problematic"),
        3: LocalizationManager.get_string("cat_learned"),
        4: LocalizationManager.get_string("cat_known")
    }

    let desc = descriptions[rel.state]

    if (desc==undefined) return ""

    if (rel.state==1 || rel.state == 2) desc = desc + " (Repeated " + rel.repeat_iteration + " times)" 


    return desc
}


export {class_by_relation, state_description_by_relation}