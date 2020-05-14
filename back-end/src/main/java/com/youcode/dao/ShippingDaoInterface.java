package com.youcode.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.youcode.models.Shipping;

@Repository
public interface ShippingDaoInterface extends JpaRepository<Shipping, Integer>{

	public Shipping findFirstByOrderByNameAsc();;
}
