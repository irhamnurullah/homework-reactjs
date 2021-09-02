import React from "react";

const DataDiri = () => {
  return (
    <div>
      <header className="shadow-sm fixed-top">
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand cstm-color" href="#">
                Kita Bank
              </a>
              <div className="d-flex">
                <i className="bi bi-person-fill me-3"></i>
                <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Irham Nurullah
                </div>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row cstm-p">
            <div className="col-4">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action cstm-bg border-0 border-bottom mb-1" type="button">
                  <i className="bi bi-person me-2"></i>Ubah Profil
                </li>
                <li className="list-group-item list-group-item-action cstm-bg border-0 border-bottom mb-1" type="button">
                  <i className="bi bi-lock me-2"></i>Ubah Password
                </li>
                <li className="list-group-item list-group-item-action cstm-bg border-0 border-bottom mb-1 actv-list-group" type="button">
                  <i className="bi bi-journal-text me-2"></i>Pengajuan KPR Saya
                </li>
                <li className="list-group-item list-group-item-action cstm-bg border-0 border-bottom mb-1" type="button">
                  <i className="bi bi-credit-card me-2"></i>Bukti Bayar KPR
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Pengajuan KPR</h5>
              <div className="mb-3">
                <ul className="nav nav-fill" role="tab-list">
                  <li className="nav-item">
                    <button className="nav-link border-0 list-group-item-action cstm-rad-l actv-tab-group" role="tab">
                      Draft
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link border-0 list-group-item-action" role="tab">
                      Menunggu Bayar
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link border-0 list-group-item-action" role="tab">
                      Selesai
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link border-0 list-group-item-action cstm-rad-r" role="tab">
                      Dibatalkan
                    </button>
                  </li>
                </ul>
              </div>
              <div className="container p-0">
                <div className="bg-light p-5 border bor-rad">
                  <h4 className="br-bot border-bottom">Data Diri</h4>
                  <dl className="row pt-4">
                    <dt className="col-sm-4">Nomor Induk KTP</dt>
                    <dd className="col-sm-7">
                      <span>: </span>3273162512930003
                    </dd>

                    <dt className="col-sm-4">Nama Lengkap</dt>
                    <dd className="col-sm-7">
                      <span>: </span>Irham Nurullah
                    </dd>

                    <dt className="col-sm-4">Tempat, Tanggal Lahir</dt>
                    <dd className="col-sm-7">
                      <span>: </span>Bandung, 25 Desember 1994
                    </dd>

                    <dt className="col-sm-4">Alamat Saat ini</dt>
                    <dd className="col-sm-7">
                      <span>: </span>Jl. Terusan Jakarta Komplek Kalijati Indah No. 13A
                    </dd>

                    <dt className="col-sm-4">Pekerjaan</dt>
                    <dd className="col-sm-7">
                      <span>: </span>Data Analyst
                    </dd>

                    <dt className="col-sm-4">Pendapatan per-bulan</dt>
                    <dd className="col-sm-7">
                      <span>: </span>Rp. 6.000.000
                    </dd>

                    <dt className="col-sm-4">Bukti Selfie KTP</dt>
                    <dd className="col-sm-7">
                      <span>: </span>
                      <a href="#">file_selfie_KTP.pdf</a>
                    </dd>

                    <dt className="col-sm-4">Bukti Slip Gaji</dt>
                    <dd className="col-sm-7">
                      <span>: </span>
                      <a href="#"> file_slip_gaji.pdf</a>
                    </dd>

                    <dt className="col-sm-4">Status Verifikasi</dt>
                    <dd className="col-sm-7 alert-danger w-25 text-center" role="alert">
                      Tidak Terverifikasi
                    </dd>
                    <dd className="col-sm-7 alert-warning w-25 text-center btn-rst shadow-sm" type="button" role="alert">
                      Reset Data Diri
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container mt-4 p-xl-5">
          <div className="row">
            <div className="col-2">
              Kita Bank
              <div className="row-cols-4 pt-5">Menara Bank</div>
              <div className="row-cols-4 pt-3">Jalan Terusan Jakarta</div>
              <div className="row-cols-4 pt-3">Bandung</div>
            </div>
            <div className="col-2">
              Contact Us
              <div className="row-cols-4 pt-5">
                <i className="bi bi-telephone me-2"></i>1500666
              </div>
              <div className="row-cols-4 pt-3">
                <i className="bi bi-envelope me-2"></i>nurullahirham@gmail.com
              </div>
              <div className="row-cols-4 pt-3">
                <i className="bi bi-whatsapp me-2"></i>+62 81395732100
              </div>
            </div>
            <div className="col-2">
              Social Media
              <div className="row-cols-4 pt-5">
                <i className="bi bi-twitter me-2"></i>@irhamnurullah
              </div>
              <div className="row-cols-4 pt-3">
                <i className="bi bi-instagram me-2"></i>@irhamnurullah
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataDiri;
