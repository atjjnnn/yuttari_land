import Container from "@/components/container";
import Meta from "@/components/meta";
import style from "../../../styles/rental.module.css";
export default function RentalFee() {
  return (
    <>
      <Container large>
        <Meta pageTitle="料金案内" />
        <h1>レンタルスペースの料金案内</h1>
        <div className={style.backFrame}>
          <div>
            <h2>料金について</h2>
            <table className={style.tableBordered}>
              <thead>
                <tr>
                  <th>時間</th>
                  <th>料金</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1時間</th>
                  <th>1,000円</th>
                </tr>
                <tr>
                  <th>1時間</th>
                  <th>1,000円</th>
                </tr>
                <tr>
                  <th>1時間</th>
                  <th>1,000円</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}
