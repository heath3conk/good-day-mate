class Timer < ActiveRecord::Base
  include Includable
  include Creatable

  def get_hash
    return {current_type: "Timer", label: self.label, duration: self.duration}
  end
end
