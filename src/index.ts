import app from './app';
import adicionarDocenteNaTurma from './endpoints/AdicionarDocenteNaTurma';
import adicionarEstudanteNaTurma from './endpoints/AdicionarEstudanteNaTurma';
import adicionarHobbyAoEstudante from './endpoints/AdicionarHobbyAoEstudante';
import criarDocente from './endpoints/criarDocente';
import criarEstudante from './endpoints/criarEstudante';
import criarHobby from './endpoints/criarHobby';
import criarTurma from './endpoints/criarTurma';
import estudanteSemTurma from './endpoints/EstudantesSemTurma';
import exibirDocenteDeUmaTurma from './endpoints/ExibirDocenteDeUmaTurma';
import exibirEstudanteDeUmaTurma from './endpoints/ExibirEstudanteDeUmaTurma';
import exibirEstudantePorMesmoHobby from './endpoints/ExibirEstudantePorMesmoHobby';
import getAllClass from './endpoints/getAllClass';
import getAllHobbies from './endpoints/getAllHobbies';
import getAllStudents from './endpoints/getAllStudents';
import getAllTeachers from './endpoints/getAllTeachers';
import mudarTurmaDeModulo from './endpoints/MudarTurmaDeModulo';
import PegarIdadeEstudanteId from './endpoints/PegarIdadeEstudanteId';
import removerDocenteDaTurma from './endpoints/RemoverDocenteDeUmaTurma';
import removerEstudanteDaTurma from './endpoints/RemoverEstudanteDaTurma';


app.get('/turma', getAllClass);
app.get('/docentes', getAllTeachers);
app.get('/estudantes', getAllStudents);
app.get('/hobby', getAllHobbies);

app.get('/estudantes/semturma', estudanteSemTurma);
app.get('/estudantes/hobby', exibirEstudantePorMesmoHobby);

app.put('/turma', criarTurma);
app.put('/estudantes', criarEstudante);
app.put('/docentes', criarDocente);
app.put('/hobby', criarHobby);

app.put('/docentes/:id', adicionarDocenteNaTurma);
app.put('/estudantes/:id', adicionarEstudanteNaTurma);
app.put('/hobby/estudantes', adicionarHobbyAoEstudante);

app.get('/estudantes/:id/idade', PegarIdadeEstudanteId);
app.get('/estudantes/turma', exibirEstudanteDeUmaTurma);
app.get('/docentes/turma', exibirDocenteDeUmaTurma);

app.put('/estudantes/:id', removerEstudanteDaTurma);
app.put('/docentes/:id', removerDocenteDaTurma);
app.put('/turma/:id', mudarTurmaDeModulo);

