/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */

/**
 * node modules
 */
import PropTypes from "prop-types";

const SkillCard = ({
  imgSrc,
  label,
  desc
}) => {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-3xl p-3 hover:bg-purple-200/50 transition-colors group">
      <figure className="bg-purple-400/40 rounded-lg overflow-hidden w-12 h-12 group-hover:bg-purple-300 transition-colors">
        <img 
          src={imgSrc} 
          alt={label}
          className="w-full h-full object-cover"
        />
      </figure>
      <div>
        <h3>
          {label}
        </h3>
        <p className="text-gray-100 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}



SkillCard.propTypes={
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}
export default SkillCard
