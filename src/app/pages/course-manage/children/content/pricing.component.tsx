import { Images } from '@assets/images';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div>
      <div className="sub-header--flex-align-center--NUoNS sub-header--container--tI8ZM">
        <div className="sub-header--flex-align-center--NUoNS sub-header--content--GOfzF">
          <h2 data-purpose="page-title" className="ud-heading-serif-xl">
            Pricing
          </h2>
        </div>
      </div>
      <div className="main-content--content--JhVD-">
        <div data-purpose="price-route-v2">
          <div className="price--course-pricing-free-prices-only-container--2Wxyi">
            <div className="price--course-pricing-selection--5-oy0" data-purpose="course-pricing-selection">
              <div className="ud-heading-md">Set a price for your course</div>
              <p>
                Please select the currency and the price tier for your course. If you’d like to offer your course for
                free, it must have a total video length of less than 2 hours. Also, courses with practice tests can not
                be free.
              </p>
              <form>
                <fieldset data-purpose="price-select" className="price-select--price-select--JYfW5 ud-form-group">
                  <legend className="ud-sr-only ud-form-label ud-heading-sm">Price</legend>
                  <div className="price-select--btn-group--CzjUd">
                    <label className="price-select--font-weight-bold--lpF6b">
                      Currency
                      <div className="ud-select-container ud-select-container-large">
                        <select aria-invalid="false" id="form-group--39" className="ud-select ud-text-md">
                          <option value="usd">USD</option>
                          <option value="vnd">VND</option>
                        </select>
                        <div className="ud-select-icon-container ud-select-icon-right">
                          <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral" />
                        </div>
                      </div>
                    </label>
                    <label className="price-select--font-weight-bold--lpF6b">
                      Price Tier
                      <div className="popper-module--popper--mM5Ie price--info-price-popover--rvjNE">
                        <Images.FaCircleInfo className="ud-icon ud-icon-small ud-icon-color-neutral" />
                      </div>
                      <div className="ud-select-container ud-select-container-large">
                        <select aria-invalid="false" id="form-group--39" className="ud-select ud-text-md">
                          <option value="0">Free</option>
                          <option value="399000">₫399,000 (tier 1)</option>
                          <option value="449000">₫449,000 (tier 2)</option>
                          <option value="499000">₫499,000 (tier 3)</option>
                          <option value="549000">₫549,000 (tier 4)</option>
                          <option value="599000">₫599,000 (tier 5)</option>
                          <option value="649000">₫649,000 (tier 6)</option>
                          <option value="699000">₫699,000 (tier 7)</option>
                          <option value="749000">₫749,000 (tier 8)</option>
                          <option value="799000">₫799,000 (tier 9)</option>
                          <option value="849000">₫849,000 (tier 10)</option>
                          <option value="899000">₫899,000 (tier 11)</option>
                          <option value="949000">₫949,000 (tier 12)</option>
                          <option value="999000">₫999,000 (tier 13)</option>
                          <option value="1049000">₫1,049,000 (tier 14)</option>
                          <option value="1099000">₫1,099,000 (tier 15)</option>
                          <option value="1149000">₫1,149,000 (tier 16)</option>
                          <option value="1199000">₫1,199,000 (tier 17)</option>
                          <option value="1249000">₫1,249,000 (tier 18)</option>
                          <option value="1299000">₫1,299,000 (tier 19)</option>
                          <option value="1349000">₫1,349,000 (tier 20)</option>
                          <option value="1399000">₫1,399,000 (tier 21)</option>
                          <option value="1499000">₫1,499,000 (tier 22)</option>
                          <option value="1599000">₫1,599,000 (tier 23)</option>
                          <option value="1699000">₫1,699,000 (tier 24)</option>
                          <option value="1799000">₫1,799,000 (tier 25)</option>
                          <option value="1899000">₫1,899,000 (tier 26)</option>
                          <option value="2199000">₫2,199,000 (tier 27)</option>
                          <option value="2399000">₫2,399,000 (tier 28)</option>
                          <option value="2499000">₫2,499,000 (tier 29)</option>
                        </select>
                        <div className="ud-select-icon-container ud-select-icon-right">
                          <Images.MdKeyboardArrowDown className="ud-icon ud-icon-small ud-icon-color-neutral" />
                        </div>
                      </div>
                    </label>
                  </div>
                  <button
                    type="submit"
                    data-purpose="price-form-submit-button"
                    className="ud-btn ud-btn-large ud-btn-primary ud-heading-md price-select--save-price-button--s-eqQ"
                  >
                    <span>Save</span>
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
