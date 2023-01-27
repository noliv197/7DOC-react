import { createClient } from "@supabase/supabase-js"

const projectUrl = process.env.REACT_APP_URL
const projectKey = process.env.REACT_APP_API_KEY

const supabase = createClient(projectUrl, projectKey)
export function produtoService(){
    return {
        getAll(){
            return supabase.from("produtos").select('*')
        },
/*         addProduto(){

        } */
    }
}

//To access the list of products the data property must be used
