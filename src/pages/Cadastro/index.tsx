/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageDefault1 from '../templates/PageDefault1';
import FormField from '../../components/formField';

const Cadastro: React.FC = () =>{
   
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
    function handleOnChange(event: any){
        const target = event.target;
        
        setFormData({...formData,
                        [target.name]:target.value});
    }
    //+---------------------------------------------
    //| monta a lista de categoria
    //+---------------------------------------------    
    const filledList=()=>{
        return(
        <ul>
        {categoryCollection.map((collection,index)=>{
            return(
                <li key={`ID_${index}`}>
                    {collection['name']}
                </li>
            )
            })}
        </ul>);
    }
    //+---------------------------------------------
    /// exibe listagem de categorias cadastradas.
    //+---------------------------------------------    
    const showList=()=>{
        return filledList();
    }
    return(
        <>
        <PageDefault1>
            <div className="content round-5">
                <div className="item">
                    <h2>Cadastro de Categorias: {formData.name}.</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="item">
                    <FormField label="Categoria"
                                    type="text"
                                    name="name"
                                    onChange={handleOnChange}/>
                    </div>
                    <div className="item">
                        <FormField label="descrição"
                                    type="textarea"
                                    name="description"
                                    rows={4}
                                    maxLength={300}
                                    onChange={handleOnChange}
                                />
                    </div>
                    <div className="item">
                    <FormField label="Cor &nbsp;"
                                    type="color"
                                    name="color"
                                    onChange={handleOnChange}/>
                    </div>
                    <div className="item">
                        <input type="submit" value="Salvar" />
                    </div>
                </form>
                {showList()}
            </div>
        </PageDefault1>
        </>
    );
}
export default Cadastro;