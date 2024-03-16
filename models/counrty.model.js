import mongoose from 'mongoose'
// Define the schema
const countrySchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Check if the URL is valid
        try {
          new URL(v);
          return true;
        } catch (error) {
          return false;
        }
      },
      message: props => `${props.value} is not a valid URL for flag`
    }
  },
  data_tier: {
    type: Number,
    required: true
  },
  plan_enabled: {
    type: Boolean,
    required: true
  }
});

// Create a model
const Country = mongoose.model('Country', countrySchema);

export default Country;
