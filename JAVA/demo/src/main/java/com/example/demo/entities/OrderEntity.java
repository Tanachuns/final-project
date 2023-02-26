package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    UsersEntity agent;
    @ManyToOne
    PlanEntity plan;

    private String title;
    private String firstname;
    private String lastname;
    private String birth_date;
    private String citizen_id;
    private String email;
    private String phone_number;
    private String address_house_number;
    private String address_moo;
    private String address_village;
    private String address_soi;
    private String address_road;
    private String address_amphur;
    private String address_tumbon;
    private String address_province;
    private String address_zipcode;
    private Date cover_start_date;
    private Date cover_end_date;
    private String beneficiary_firstname;
    private String beneficiary_lastname;
    private String beneficiary_relation;
    private String beneficiary_title;
    private String status;
    private Date created_at;
    private Date updated_at;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
    }

    public String getCitizen_id() {
        return citizen_id;
    }

    public void setCitizen_id(String citizen_id) {
        this.citizen_id = citizen_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getaddress_house_number() {
        return address_house_number;
    }

    public void setaddress_house_number(String address_house_number) {
        this.address_house_number = address_house_number;
    }

    public String getAddress_moo() {
        return address_moo;
    }

    public void setAddress_moo(String address_moo) {
        this.address_moo = address_moo;
    }

    public String getAddress_village() {
        return address_village;
    }

    public void setAddress_village(String address_village) {
        this.address_village = address_village;
    }

    public String getAddress_soi() {
        return address_soi;
    }

    public void setAddress_soi(String address_soi) {
        this.address_soi = address_soi;
    }

    public String getAddress_road() {
        return address_road;
    }

    public void setAddress_road(String address_road) {
        this.address_road = address_road;
    }

    public String getAddress_amphur() {
        return address_amphur;
    }

    public void setAddress_amphur(String address_amphur) {
        this.address_amphur = address_amphur;
    }

    public String getAddress_tumbon() {
        return address_tumbon;
    }

    public void setAddress_tumbon(String address_tumbon) {
        this.address_tumbon = address_tumbon;
    }

    public String getAddress_province() {
        return address_province;
    }

    public void setAddress_province(String address_province) {
        this.address_province = address_province;
    }

    public String getAddress_zipcode() {
        return address_zipcode;
    }

    public void setAddress_zipcode(String address_zipcode) {
        this.address_zipcode = address_zipcode;
    }

    public Date getCover_start_date() {
        return cover_start_date;
    }

    public void setCover_start_date(Date cover_start_date) {
        this.cover_start_date = cover_start_date;
    }

    public Date getCover_end_date() {
        return cover_end_date;
    }

    public void setCover_end_date(Date cover_end_date) {
        this.cover_end_date = cover_end_date;
    }

    public String getBeneficiary_firstname() {
        return beneficiary_firstname;
    }

    public UsersEntity getAgent() {
        return agent;
    }

    public void setAgent(UsersEntity agent) {
        this.agent = agent;
    }

    public PlanEntity getPlan() {
        return plan;
    }

    public void setPlan(PlanEntity plan) {
        this.plan = plan;
    }

    public void setBeneficiary_firstname(String beneficiary_firstname) {
        this.beneficiary_firstname = beneficiary_firstname;
    }

    public String getBeneficiary_lastname() {
        return beneficiary_lastname;
    }

    public void setBeneficiary_lastname(String beneficiary_lastname) {
        this.beneficiary_lastname = beneficiary_lastname;
    }

    public String getBeneficiary_relation() {
        return beneficiary_relation;
    }

    public void setBeneficiary_relation(String beneficiary_relation) {
        this.beneficiary_relation = beneficiary_relation;
    }

    public String getBeneficiary_title() {
        return beneficiary_title;
    }

    public void setBeneficiary_title(String beneficiary_title) {
        this.beneficiary_title = beneficiary_title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public OrderEntity(String title, String firstname, String lastname, String birth_date, String citizen_id,
            String email, String phone_number, String address_house_number, String address_moo, String address_village,
            String address_soi, String address_road, String address_amphur, String address_tumbon,
            String address_province, String address_zipcode,
            Date cover_start_date,
            Date cover_end_date,
            String beneficiary_firstname, String beneficiary_lastname, String beneficiary_relation,
            String beneficiary_title, String status, UsersEntity agent, PlanEntity plan) {
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth_date = birth_date;
        this.citizen_id = citizen_id;
        this.email = email;
        this.phone_number = phone_number;
        this.address_house_number = address_house_number;
        this.address_moo = address_moo;
        this.address_village = address_village;
        this.address_soi = address_soi;
        this.address_road = address_road;
        this.address_amphur = address_amphur;
        this.address_tumbon = address_tumbon;
        this.address_province = address_province;
        this.address_zipcode = address_zipcode;
        this.cover_start_date = cover_start_date;
        this.cover_end_date = cover_end_date;
        this.beneficiary_firstname = beneficiary_firstname;
        this.beneficiary_lastname = beneficiary_lastname;
        this.beneficiary_relation = beneficiary_relation;
        this.beneficiary_title = beneficiary_title;
        this.status = status;
        this.agent = agent;
        this.plan = plan;
    }

    public OrderEntity() {
        super();
    }
}
