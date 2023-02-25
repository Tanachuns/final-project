package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UsersEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

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
    private String password;
    private String license_number;
    private String license_exp_date;
    private String type;

    public UsersEntity(String citizen_id, String email, String password) {
        this.citizen_id = citizen_id;
        this.email = email;
        this.password = password;
    }

    public UsersEntity(String title, String firstname, String lastname, String birth_date,
            String citizen_id,
            String email, String phone_number, String address_house_number, String address_moo, String address_village,
            String address_soi, String address_road, String address_amphur, String address_tumbon,
            String address_province, String address_zipcode, String password, String license_number,
            String license_exp_date, String type) {
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
        this.password = password;
        this.license_number = license_number;
        this.license_exp_date = license_exp_date;
        this.type = type;
    }

    public UsersEntity() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public String getaddress_amphur() {
        return address_amphur;
    }

    public void setaddress_amphur(String address_amphur) {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLicense_number() {
        return license_number;
    }

    public void setLicense_number(String license_number) {
        this.license_number = license_number;
    }

    public String getLicense_exp_date() {
        return license_exp_date;
    }

    public void setLicense_exp_date(String license_exp_date) {
        this.license_exp_date = license_exp_date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
