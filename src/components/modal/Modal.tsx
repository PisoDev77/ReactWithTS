import React from "react";
import { list } from "./List";
import * as S from "./Modal.style"

import listImg from "./bx-list-ul.svg";

type Props = {

};
type State = {
    toggleModal: boolean
};

export class Modal extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state ={
            toggleModal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }
    getList(){
        return list.map((cate) => {

            return(
                <S.Category key={"MODAL "+ cate.category}>
                {cate.category}
                    {
                        cate.items.map((item)=>{

                            return (
                                <S.Subject key={"SUBJECT" + item.subject}>
                                    {item.subject}
                                </S.Subject>
                            )
                        })
                    }
                </S.Category>
            );
        });
    }

    toggleModal(){
        this.setState(prev => ({
            toggleModal: !prev.toggleModal
        }))
    }
    
    render(){
        return (

            <S.Category>
                <img src={listImg} alt="modal" onClick={this.toggleModal}/>
                {
                    this.state.toggleModal && this.getList()
                }
            </S.Category>
        );
    }
}