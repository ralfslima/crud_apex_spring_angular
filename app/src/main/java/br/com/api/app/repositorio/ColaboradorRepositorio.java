package br.com.api.app.repositorio;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.app.modelo.ColaboradorModelo;

@Repository
public interface ColaboradorRepositorio extends CrudRepository<ColaboradorModelo, Integer>{
    
    List<ColaboradorModelo> findAll();

    ColaboradorModelo findByCodigo(int codigo);

}
