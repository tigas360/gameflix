import React, { useState } from 'react';
import PageDefault1 from '../templates/PageDefault1';
import FormField from '../../components/formField';

const Cadastro: React.FC<{}> = (props) =>{
   
    const categoryData ={
        name:'',
        description:'',
        color: '#FFFFFF',
        classification:'T(een)'
    }
    const [formData,setFormData] = useState<any>(categoryData); // valores
    const [categoryCollection,setCategoryCollection]=useState([]); // object array
    //+---------------------------------------------
    //| submissao do formulario
    //+---------------------------------------------    
    const handleSubmit=(event:any)=>{
        event.preventDefault();
        setCategoryCollection(
            categoryCollection.concat(formData));
            setFormData(categoryData);
    }
    //+---------------------------------------------
    //| captura a event de mudança do input
    //+---------------------------------------------    
    function handleOnChange(event:any){
        let target = event.target;
        let name = target.name;
        let value = target.value;
        
        setFormData({...formData,
                        [name]:value});
    }
    //+---------------------------------------------
    //| monta a lista de categoria
    //+---------------------------------------------    
    const filledList=()=>{
        return(
        <ul>
        {categoryCollection.map((collection,index)=>{
            return(
                <li key={'ID_${index}'}>
                    {collection['name']}
                </li>
            )
            })}
        </ul>);
    }
    //+---------------------------------------------
    /// exibe listagem de categorias cadastradas.
    //+---------------------------------------------    
    const showList=(list:any)=>{
        return filledList();
    }
    return(
        <>
        <PageDefault1>
            <h2>Cadastro de Categorias: {formData.name}.</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <FormField label="Categoria"
                                type="text"
                                name="name"
                                onChange={handleOnChange}/>
                </div>
                <div>
                    <FormField label="descrição"
                                type="textarea"
                                name="description"
                                rows={4}
                                maxLength={300}
                                onChange={handleOnChange}
                            />
                </div>
                <div>
                <FormField label="Cor &nbsp;"
                                type="color"
                                name="color"
                                onChange={handleOnChange}/>
                </div>
                <input type="submit" value="Salvar" />
            </form>
            {showList(categoryCollection)}

        </PageDefault1>
        </>
    );
}
export default Cadastro;