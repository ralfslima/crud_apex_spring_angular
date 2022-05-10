package br.com.api.app.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.app.modelo.ColaboradorModelo;
import br.com.api.app.repositorio.ColaboradorRepositorio;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ColaboradorControle {
    
    @Autowired
    private ColaboradorRepositorio acao;

    @PostMapping("/api")
    public ColaboradorModelo cadastrar(@RequestBody ColaboradorModelo obj){
        return acao.save(obj);
    }

    @GetMapping("/api")
    public List<ColaboradorModelo> selecionar(){
        return acao.findAll();
    } 
    
    @GetMapping("/api/{codigo}")
    public ColaboradorModelo selecionarPorCodigo(@PathVariable int codigo){
        return acao.findByCodigo(codigo);
    }
    
    @PutMapping("/api")
    public ColaboradorModelo editar(@RequestBody ColaboradorModelo obj){
        return acao.save(obj);
    }

    @DeleteMapping("/api/{codigo}")
    public void remover(@PathVariable int codigo){
        acao.delete(selecionarPorCodigo(codigo));
    }

}
