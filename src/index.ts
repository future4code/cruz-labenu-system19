import app from './app';
import criarDocente from './endpoints/criarDocente';
import criarEstudante from './endpoints/criarEstudante';
import criarTurma from './endpoints/criarTurma';
import estudanteSemTurma from './endpoints/EstudantesSemTurma';
import getAllClass from './endpoints/getAllClass';
import getAllStudents from './endpoints/getAllStudents';
import getAllTeachers from './endpoints/getAllTeachers';
import PegarIdadeEstudanteId from './endpoints/PegarIdadeEstudanteId';
import removerEstudanteDaTurma from './endpoints/RemoverEstudanteDaTurma';


app.get('/turma', getAllClass);
app.get('/docentes', getAllTeachers);
app.get('/estudantes', getAllStudents);
app.get('/estudantes/semturma', estudanteSemTurma);

app.put('/turma', criarTurma);
app.put('/estudantes', criarEstudante);
app.put('/docentes', criarDocente);

app.get('/estudantes/:id/idade', PegarIdadeEstudanteId);

app.put('/estudantes/:id', removerEstudanteDaTurma);


// app.get('/movies/:id/characters', );//JOIN
