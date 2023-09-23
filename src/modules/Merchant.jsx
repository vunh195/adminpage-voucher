import React, { useState } from "react";
import "./Merchant.scss";
import {
  addMerchant,
  deleteMerchant,
  editMerchant,
  getAllMerchant,
} from "../queries/merchant.queries";
export const Merchant = () => {
  const [idDelete, setIdDelelet] = useState();
  const [list, setList] = React.useState();
  const [merchantCode, setMerchantCode] = useState("");
  const [name, setName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [objEdit, setObjEdit] = useState();
  console.log(objEdit?.description);
  const handelEdit = async () => {
    if (!objEdit) {
      return alert("Please select item");
    }
    const rs = await editMerchant(objEdit);
    if (rs?.status === "Success") {
      alert(rs?.message);
      const newlist = await getAllMerchant();
      return setList(newlist);
    }
    if (rs?.status === "Failed") {
      alert("Edit Failed");
    }
  };
  const handelAdd = async () => {
    if (
      !merchantCode ||
      !name ||
      !legalName ||
      !logoUrl ||
      !address ||
      !phone ||
      !email ||
      !desc
    ) {
      alert("Please enter enough value");
      return;
    }
    const obj = {
      merchantCode: merchantCode,
      name: name,
      legalName: legalName,
      logoUrl: logoUrl,
      address: address,
      phone: phone,
      email: email,
      description: desc,
    };
    const rs = await addMerchant(obj);
    if (rs?.status === "Success") {
      const newlist = await getAllMerchant();
      return setList(newlist);
    }
    if (rs?.status === "Failed") {
      return alert(rs?.message);
    }
  };
  const handelDelelet = () => {
    if (!idDelete) {
      alert("Please enter valid ID");
      return;
    }
    deleteMerchant(idDelete).then((rs) => {
      if (rs?.status === "Success") {
        alert(`Delete merchant ${idDelete} successfull`);
        // const newlist = await getAllMerchant();
        // return setList(newlist);
      }
    });
  };

  React.useEffect(() => {
    getAllMerchant().then((rs) => setList(rs));
    // const fn = async () => {
    //   const rs = await getAllChain();
    //   setList(rs);
    // };
    // fn();
  }, []);
  return (
    <div className="wrapper">
      <div className="list">
        <h2>Data</h2>
        <div className="item head">
          <div className="a id">ID</div>
          <div className="a">merchantCode</div>
          <div className="a">name</div>
          <div className="a">legalName</div>
          <div className="a">logoUrl</div>
          <div className="a">address</div>
          <div className="a">phone</div>
          <div className="a">email</div>
          <div className="a">description</div>
        </div>
        {list
          ? list?.map((item, key) => {
              return (
                <div
                  className="item"
                  key={key}
                  onClick={() => {
                    setObjEdit(item);
                    setIdDelelet(item?.id);
                  }}
                >
                  <div className="a id">{item?.id}</div>
                  <div className="a">{item?.merchantCode}</div>
                  <div className="a">{item?.name}</div>
                  <div className="a">{item?.legalName}</div>
                  <div className="a">{item?.logoUrl}</div>
                  <div className="a">{item?.address}</div>
                  <div className="a">{item?.phone}</div>
                  <div className="a">{item?.email}</div>
                  <div className="a">{item?.description}</div>
                </div>
              );
            })
          : "No data"}
      </div>
      <div className="actions">
        <div className="action">
          <div className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="merchantCode"
              onChange={(e) => setMerchantCode(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="legalName"
              onChange={(e) => setLegalName(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="logoURl"
              onChange={(e) => setLogoUrl(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="btn" onClick={() => handelAdd()}>
            Add
          </div>
        </div>
        <div className="action">
          <h4>ID : {objEdit?.id}</h4>
          <div className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="merchantCode"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.merchantCode = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.merchantCode}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="name"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.name = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.name}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="legalName"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.legalName = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.legalName}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="logoURl"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.logoUrl = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.logoUrl}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="address"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.address = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.address}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="phone"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.phone = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.phone}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="email"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.email = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.email}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="description"
              onChange={(e) => {
                let ob = { ...objEdit };
                ob.description = e.target.value;
                setObjEdit(ob);
              }}
              defaultValue={objEdit?.description}
            />
          </div>
          <div className="btn" onClick={() => handelEdit()}>
            Edit
          </div>
        </div>
        <div className="action">
          <div className="form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter valid id"
              defaultValue={idDelete}
              onChange={(e) => setIdDelelet(e.target.value)}
            />
          </div>
          <div className="btn" onClick={() => handelDelelet()}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};