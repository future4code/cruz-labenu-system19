export enum SPECIALTIES {
    REACT = 'REACT',
    REDUX = 'REDUX',
    CSS = 'CSS',
    TESTES = 'TESTES',
    TYPESCRIPT = 'TYPESCRIPT',
    POO = 'POO',
    BACKEND = 'BACKEND'
};

export type Class = {
    id: number,
    nome: string,
    data_inicio: string,
    data_final: string,
    modulo: number
};

export type Student = {
    id: number,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: number
};

export type Teacher = {
    id: number,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: number
};

export type Hobbies = {
    id: number,
    nome: string
};

export type Specialties = {
    id: number, 
    nome: string
};

export type Student_Hobbies = {
    estudante_id: number,
    passatempo_id: number
}